import { initializeApp, getApps, getApp } from "@firebase/app";
import { addDoc, collection, getFirestore, serverTimestamp } from "@firebase/firestore";
import { 
  FormControl, 
  FormLabel, 
  Input, 
  Button, 
  Box, 
  Heading, 
  useColorMode, 
  Textarea, 
  Text, 
  Flex, 
  Link,
  Container,
  VStack,
  HStack,
  useToast,
  FormErrorMessage,
  Icon
} from "@chakra-ui/react";

import { useState } from "react";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyBNOK53A9UKw8pryXNB-BlElVl3h8xL92g",
  authDomain: "portfolio-841bd.firebaseapp.com",
  projectId: "portfolio-841bd",
  storageBucket: "portfolio-841bd.firebasestorage.app",
  messagingSenderId: "357811972817",
  appId: "1:357811972817:web:d9632b6444450ab753f3f0",
  measurementId: "G-MQJVBZB9L5"
};

// Check if Firebase is already initialized, if not initialize it
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);



const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactnum, setContactNum] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const { colorMode } = useColorMode();
  const toast = useToast();

  const bgColor = { light: 'white', dark: 'gray.800' };
  const borderColor = { light: 'gray.200', dark: 'gray.600' };
  const textColor = { light: 'gray.600', dark: 'gray.300' };
  const iconColor = { light: 'blue.500', dark: 'blue.400' };

  const handleChange = ({ target: { name, value } }) => {
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'contactnum':
        setContactNum(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!contactnum.trim()) {
      newErrors.contactnum = 'Contact number is required';
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(contactnum)) {
      newErrors.contactnum = 'Please enter a valid contact number';
    }
    if (!message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Form Error",
        description: "Please fix the errors below and try again.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true);
    const id = uuidv4();

    try {
      const docRef = await addDoc(collection(db, "contact"), {
        id,
        name,
        email,
        contactnum,
        message,
        timestamp: serverTimestamp()
      });

      console.log("Document written with ID: ", docRef.id);
      setName('');
      setEmail('');
      setContactNum('');
      setMessage('');
      setFormSubmitted(true);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setName('');
    setEmail('');
    setContactNum('');
    setMessage('');
    setErrors({});
  };

  return (
    <Container maxW="7xl" py={16}>
      {/* Header Section */}
      <Box textAlign="center" mb={16}>
        <Heading 
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} 
          mb={4}
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Get In Touch
        </Heading>
        <Text 
          fontSize={{ base: 'md', md: 'lg' }} 
          color={textColor[colorMode]}
          maxW="2xl"
          mx="auto"
        >
          Have a question or want to work together? I&apos;d love to hear from you.
        </Text>
      </Box>

      <Flex 
        direction={{ base: 'column', lg: 'row' }} 
        gap={12}
        align="stretch"
      >
        {/* Contact Form */}
        <Box flex="2">
          <Box
            bg={bgColor[colorMode]}
            p={8}
            borderRadius="2xl"
            border="1px solid"
            borderColor={borderColor[colorMode]}
            boxShadow="xl"
          >
            {formSubmitted ? (
              <VStack spacing={6} textAlign="center" py={8}>
                <Box
                  w={16}
                  h={16}
                  borderRadius="full"
                  bg="green.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={4}
                >
                  <Text fontSize="2xl" color="green.500">✓</Text>
                </Box>
                <Heading size="lg" color="green.500" mb={4}>
                  Message Sent Successfully!
                </Heading>
                <Text color={textColor[colorMode]} fontSize="lg" mb={6}>
                  Thank you for reaching out! I&apos;ll get back to you within 24 hours.
                </Text>
                <Button
                  colorScheme="blue"
                  size="lg"
                  onClick={resetForm}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg'
                  }}
                >
                  Send Another Message
                </Button>
              </VStack>
            ) : (
              <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  <Heading size="lg" mb={2} textAlign="center">
                    Send Me a Message
                  </Heading>
                  
                  <HStack spacing={4} w="100%">
                    <FormControl isInvalid={errors.name} flex="1">
                      <FormLabel fontWeight="semibold">Name *</FormLabel>
                      <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        size="lg"
                        borderColor={borderColor[colorMode]}
                        _hover={{ borderColor: 'blue.300' }}
                        _focus={{ 
                          borderColor: 'blue.500',
                          boxShadow: '0 0 0 1px #3182CE'
                        }}
                      />
                      <FormErrorMessage>{errors.name}</FormErrorMessage>
                    </FormControl>
                  </HStack>

                  <HStack spacing={4} w="100%">
                    <FormControl isInvalid={errors.email} flex="1">
                      <FormLabel fontWeight="semibold">Email *</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        size="lg"
                        borderColor={borderColor[colorMode]}
                        _hover={{ borderColor: 'blue.300' }}
                        _focus={{ 
                          borderColor: 'blue.500',
                          boxShadow: '0 0 0 1px #3182CE'
                        }}
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.contactnum} flex="1">
                      <FormLabel fontWeight="semibold">Contact Number *</FormLabel>
                      <Input
                        type="tel"
                        name="contactnum"
                        value={contactnum}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        size="lg"
                        borderColor={borderColor[colorMode]}
                        _hover={{ borderColor: 'blue.300' }}
                        _focus={{ 
                          borderColor: 'blue.500',
                          boxShadow: '0 0 0 1px #3182CE'
                        }}
                      />
                      <FormErrorMessage>{errors.contactnum}</FormErrorMessage>
                    </FormControl>
                  </HStack>

                  <FormControl isInvalid={errors.message}>
                    <FormLabel fontWeight="semibold">Message *</FormLabel>
                    <Textarea
                      name="message"
                      value={message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello!"
                      size="lg"
                      rows={6}
                      resize="vertical"
                      borderColor={borderColor[colorMode]}
                      _hover={{ borderColor: 'blue.300' }}
                      _focus={{ 
                        borderColor: 'blue.500',
                        boxShadow: '0 0 0 1px #3182CE'
                      }}
                    />
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    w="100%"
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg'
                    }}
                    transition="all 0.2s"
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            )}
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;