import { initializeApp } from "@firebase/app";
import { addDoc, collection, getFirestore, serverTimestamp } from "@firebase/firestore";
import { FormControl, FormLabel, Input, Button, Box, Heading, useColorMode, Textarea, Text, Flex, Link } from "@chakra-ui/react";

import { useState } from "react";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
    apiKey: "AIzaSyCUcqxTcbOssPiKqg6Weg256KkUlT_0Vxg",
    authDomain: "my-contact-form-5be52.firebaseapp.com",
    projectId: "my-contact-form-5be52",
    storageBucket: "my-contact-form-5be52.appspot.com",
    messagingSenderId: "507303115058",
    appId: "1:507303115058:web:5d9baf3ca19f238e35ff2b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactnum, setContactNum] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { colorMode } = useColorMode();

  const handleChange = ({ target: { name, value } }) => {
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

  const getFontAwesomeIcon = (icon) => (
    <FontAwesomeIcon
      icon={icon}
      className={`text-xl mx-2 ${colorMode === "light" ? "text-black" : "text-white"}`}
    />
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if any required field is empty
    if (!name || !email || !contactnum || !message) {
      alert("Please fill out all the required fields.");
      return;
    }

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
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Flex height="100vh" justifyContent="center" flexDirection="column">
      <Flex flexDirection={["column", "row"]} justifyContent={["center", "space-around"]} alignItems={["center", "flex-start"]}>
        <Box w={["100%", "50%"]} textAlign={["center", "left"]} p={5} borderRadius={3}>
          <Box mb={5} ms={3} me={3} border="1px" p={5} borderRadius={2}>
            {formSubmitted ? (
              <Heading size="lg" mb={8}>Thank you for filling out the form. I will reply to you via email.</Heading>
            ) : (
              <form onSubmit={handleSubmit}>
                <Heading textAlign="center" mb={8}>Get in touch</Heading>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" border="1px" name="name" value={name} onChange={handleChange} placeholder="Enter your name"/>
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" border="1px" name="email" value={email} onChange={handleChange} placeholder="Enter your email"/>
                </FormControl>
                <FormControl>
                  <FormLabel>Contact Number</FormLabel>
                  <Input type="number" pattern="[0-9]*" inputMode="numeric" border="1px" name="contactnum" value={contactnum} onChange={handleChange} placeholder="Enter your contact number"/>
                </FormControl>
                <FormControl>
                  <FormLabel>Message</FormLabel>
                  <Textarea name="message" border="1px" value={message} onChange={handleChange} placeholder="Enter your message"/>
                </FormControl>
                <Button type="submit" onClick={handleSubmit} mt={5} w={["50%", "100%"]}>Submit</Button>
              </form>
            )}
          </Box>
        </Box>
        <Box border="1px" borderRadius={5} p={5} ml={[0, 5]} mt={[10, 0]}>
          <Heading mb={5} >Contact Information</Heading>
          <Box me={5} textAlign={["center", "left"]}>
            <Text mt={5}>
              {getFontAwesomeIcon(faPhone)} +1 (674)-512-5106
            </Text>
            <Link href='iqbal.mashal077@gmail.com'>
              <Text mt={5}>
                {getFontAwesomeIcon(faEnvelope)} iqbal.mashal077@gmail.com
              </Text>
            </Link>
            <Link href="https://goo.gl/maps/XAoQcfPffVfVD83c8">
              <Text mt={5}>
                {getFontAwesomeIcon(faLocationDot)} Toronto, Ontario
              </Text>
            </Link>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Contact;
