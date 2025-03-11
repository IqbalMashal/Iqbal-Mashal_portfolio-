import { Box, Flex, Center, VStack, Text } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import GithubIcon from "../ui/GithubIcon";
import LinkedinIcon from "../ui/LinkedinIcon";

const Hero = () => {
  const textSize = ['2xl', '2xl', '3xl'];

  return (
    <Flex height="95vh" justifyContent="center" alignItems="center" flexDirection="column">
      <Box p={5}>
        <VStack spacing={4} align="center">
          <Text fontSize={textSize} textAlign="center">
            Hello, I&apos;m <Text as="span" fontWeight="bold">Iqbal Mashal</Text><br />
            <TypeAnimation
              sequence={[
                'Full Stack Web Developer',
                1000,
                'Software Engineer',
                1000,
                'Front-end Developer',
                1000,
                'Back-end Developer',
                1000,
                'Freelancer',
                1000,
              ]}
              speed={20}
              wrapper="span"
              repeat={Infinity}
            />
          </Text>
          <Box>
            <GithubIcon />
            <LinkedinIcon />
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Hero;