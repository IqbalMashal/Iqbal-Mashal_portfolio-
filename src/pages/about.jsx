import { Stack, Text, Box, Button, useColorMode, Center } from "@chakra-ui/react";
import Stacks from "../components/sections/Stacks";

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <Box p={4}>
      <Center>
        <Box maxW="800px" textAlign="center">
          {/* About Me Heading */}
          <Text fontSize="4xl" fontWeight="bold" mb={8}>
            About Me
          </Text>

          {/* About Me Details */}
          <Stack spacing={6} textAlign="left" mb={8}>
            <Text fontSize="xl">
              <Text as="span" fontWeight="bold">Name:</Text> Iqbal Mashal
            </Text>
            <Text fontSize="xl">
              <Text as="span" fontWeight="bold">Location:</Text> Toronto, Canada
            </Text>
            <Text fontSize="xl">
              <Text as="span" fontWeight="bold">Education:</Text> Seneca College - Computer Programming & Analysis (4.0 GPA)
            </Text>
            <Text fontSize="xl">
              <Text as="span" fontWeight="bold">Experience:</Text> Software Developer | Database Designer | Web Developer
            </Text>
            <Text fontSize="xl">
              <Text as="span" fontWeight="bold">Expertise:</Text> JavaScript, Node.js, React, Express, MongoDB, PostgreSQL, Tailwind CSS
            </Text>
            <Text fontSize="xl">
              <Text as="span" fontWeight="bold">Projects:</Text> PDFlex (AI-powered PDF assistant), URL Shortener, YouTube Bookmarking Extension, Library Management System
            </Text>
            <Text fontSize="xl">
              <Text as="span" fontWeight="bold">Goal:</Text> To build efficient, scalable, and user-friendly applications that solve real-world problems
            </Text>
          </Stack>

          {/* Download Resume Button */}
          <Button
            as="a"
            href="/Iqbal_mashal_resume.pdf"
            download="Iqbal_mashal_resume.pdf"
            colorScheme={colorMode === "light" ? "blue" : "teal"}
            size="lg"
            mt={6}
            _hover={{ transform: "scale(1.05)", transition: "all 0.2s" }}
          >
            Download Resume
          </Button>
        </Box>
      </Center>

      {/* Tech Stack Section */}
      <Stacks />
    </Box>
  );
};

export default About;