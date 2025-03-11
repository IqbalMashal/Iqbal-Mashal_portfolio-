import { Text, Box, Image, useBreakpointValue } from "@chakra-ui/react";

const Overview = () => {
  // Responsive values
  const showImage = useBreakpointValue({ base: false, md: false, lg: true });
  const flexDir = useBreakpointValue({ base: "column", md: "row" });
  const textAlign = useBreakpointValue({ base: "center", md: "left" });
  const imageSize = useBreakpointValue({ base: "300px", md: "400px", lg: "500px", xl: "650px" });
  const fontSizeHeading = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" });
  const fontSizeBody = useBreakpointValue({ base: "lg", md: "xl", lg: "2xl" });

  return (
    <Box
      display="flex"
      flexDirection={flexDir}
      alignItems="center"
      justifyContent="center"
      my={8}
      mx={[4, 6, 8]}
      height="100%"
    >
      {/* Image Section */}
      {showImage && (
        <Box flex={1} display="flex" justifyContent="center" alignItems="center" mb={[8, 0]}>
          <Image
            src="webdev.svg"
            boxSize={imageSize}
            alt="Overview image"
            fallbackSrc="https://via.placeholder.com/650" // Fallback image if src fails
          />
        </Box>
      )}

      {/* Text Section */}
      <Box flex={1} display="flex" flexDirection="column" justifyContent="center" ml={showImage ? [0, 6, 8] : 0}>
        <Text fontSize={fontSizeHeading} fontWeight="bold" mb={6} textAlign={textAlign}>
          Who am I?
        </Text>
        <Text fontSize={fontSizeBody} lineHeight="tall" textAlign={textAlign}>
          I&apos;m Iqbal Mashal, a backend developer based in Toronto, Canada. I specialize in working with databases,
          building scalable APIs, and optimizing backend performance.
        </Text>
        <Text fontSize={fontSizeBody} lineHeight="tall" mt={4} textAlign={textAlign}>
          I have experience with JavaScript, Node.js, Express, MongoDB, PostgreSQL, and other backend technologies.
          I&apos;m a fast learner, always exploring new tools and best practices to improve my development workflow.
        </Text>
      </Box>
    </Box>
  );
};

export default Overview;