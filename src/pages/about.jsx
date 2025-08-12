import { 
  Text, 
  Box, 
  Image, 
  useBreakpointValue, 
  Container,
  Heading,
  VStack,
  HStack,
  useColorMode,
  Flex,
  Badge,
  Icon,
  SimpleGrid
} from "@chakra-ui/react";

const About = () => {
  const { colorMode } = useColorMode();
  
  // Color schemes
  const bgColor = { light: 'white', dark: 'gray.800' };
  const borderColor = { light: 'gray.200', dark: 'gray.600' };
  const textColor = { light: 'gray.600', dark: 'gray.300' };
  const accentColor = { light: 'blue.500', dark: 'blue.400' };

  // Responsive values
  const showImage = useBreakpointValue({ base: false, md: false, lg: true });
  const flexDir = useBreakpointValue({ base: "column", lg: "row" });
  const textAlign = useBreakpointValue({ base: "center", lg: "left" });
  const imageSize = useBreakpointValue({ base: "280px", md: "350px", lg: "400px", xl: "500px" });

  // Skills and highlights data
  const highlights = [
    {
      emoji: "👨‍💻",
      title: "4+ Years Experience",
      description: "Software Developer specializing in website development and related technologies."
    },
    {
      emoji: "🎓",
      title: "Education",
      description: "Currently at Seneca Polytechnic, planning to transfer to Honours Bachelor of Science in Computer Science at Ontario Tech University."
    },
    {
      emoji: "🛠",
      title: "Focus Areas",
      description: "Building user-friendly, scalable websites and web applications that enhance user experience and business efficiency."
    },
    {
      emoji: "🔧",
      title: "Full Stack",
      description: "From front-end design to back-end development and database integration, contributing to projects that improve functionality."
    },
    {
      emoji: "💡",
      title: "Continuous Learning",
      description: "Passionate about exploring new web technologies and best practices to deliver high-quality solutions."
    }
  ];

  const skills = [
    "React", "Next.js", "JavaScript", "TypeScript", "Node.js", 
    "Python", "Firebase", "MongoDB", "PostgreSQL", "Git"
  ];

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
          About Me
        </Heading>
        <Text 
          fontSize={{ base: 'md', md: 'lg' }} 
          color={textColor[colorMode]}
          maxW="2xl"
          mx="auto"
        >
          Passionate software developer crafting digital experiences
        </Text>
      </Box>

      {/* Main Content */}
      <Flex 
        direction={flexDir}
        align="center"
        gap={12}
        mb={16}
      >
        {/* Image Section */}
        {showImage && (
          <Box flex="1" display="flex" justifyContent="center">
            <Box
              position="relative"
              _before={{
                content: '""',
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                right: '20px',
                bottom: '20px',
                bg: accentColor[colorMode],
                borderRadius: '2xl',
                zIndex: -1,
                opacity: 0.1
              }}
            >
              <Image
                src="webdev.svg"
                boxSize={imageSize}
                alt="Developer illustration"
                fallbackSrc="https://via.placeholder.com/500"
                borderRadius="xl"
                boxShadow="2xl"
                transition="transform 0.3s ease"
                _hover={{ transform: 'scale(1.05)' }}
              />
            </Box>
          </Box>
        )}

        {/* Text Section */}
        <Box flex="1">
          <VStack spacing={8} align="stretch">
            <Box textAlign={textAlign}>
              <Heading 
                size="xl" 
                mb={4}
                color={colorMode === 'light' ? 'gray.800' : 'white'}
              >
                Who am I?
              </Heading>
              <Text 
                fontSize="lg" 
                color={textColor[colorMode]}
                lineHeight="tall"
              >
                I&#39;m a passionate software developer who loves turning ideas into reality through code. 
                With a focus on creating meaningful digital experiences, I combine technical expertise 
                with creative problem-solving to build solutions that make a difference.
              </Text>
            </Box>

            {/* Skills Tags */}
            <Box textAlign={textAlign}>
              <Text 
                fontSize="md" 
                fontWeight="semibold" 
                mb={3}
                color={colorMode === 'light' ? 'gray.700' : 'gray.200'}
              >
                Technologies I work with:
              </Text>
              <Flex wrap="wrap" justify={textAlign === 'center' ? 'center' : 'flex-start'} gap={2}>
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    colorScheme="blue"
                    variant="subtle"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'md'
                    }}
                    transition="all 0.2s"
                  >
                    {skill}
                  </Badge>
                ))}
              </Flex>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Highlights Grid */}
      <Box>
        <Heading 
          size="lg" 
          textAlign="center" 
          mb={12}
          color={colorMode === 'light' ? 'gray.800' : 'white'}
        >
          My Journey & Expertise
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {highlights.map((highlight, index) => (
            <Box
              key={index}
              bg={bgColor[colorMode]}
              p={6}
              borderRadius="xl"
              border="1px solid"
              borderColor={borderColor[colorMode]}
              boxShadow="lg"
              transition="all 0.3s ease"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '2xl',
                borderColor: accentColor[colorMode]
              }}
              cursor="pointer"
            >
              <VStack spacing={4} align="stretch">
                <Flex align="center" gap={3}>
                  <Text fontSize="2xl">{highlight.emoji}</Text>
                  <Heading size="md" color={accentColor[colorMode]}>
                    {highlight.title}
                  </Heading>
                </Flex>
                <Text 
                  color={textColor[colorMode]}
                  lineHeight="tall"
                  fontSize="sm"
                >
                  {highlight.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default About;