import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";

const TECH_STACK = [
  {
    title: "Front End",
    items: [
      { src: "/html5.svg", alt: "HTML5 Logo" },
      { src: "/css3.svg", alt: "CSS3 Logo" },
      { src: "/javascript.svg", alt: "JavaScript Logo" },
      { src: "/react.svg", alt: "React Logo" },
      { src: "/nextjs-icon.svg", alt: "Next.js Logo" },
      { src: "/bootstrap.svg", alt: "Bootstrap Logo" },
      { src: "/tailwind.svg", alt: "Tailwind CSS Logo" },
    ],
  },
  {
    title: "Back End",
    items: [
      { src: "/nodejs.png", alt: "Node.js logo" },
      { src: "/express.svg", alt: "Express logo" },
      { src: "/python.svg", alt: "Python logo" },
      { src: "/ccp.png", alt: "C logo" },
      { src: "/cpp.png", alt: "C++ logo" },
      { src: "/c.png", alt: "C# logo" },
      { src: "/firebase.svg", alt: "Firebase logo" },
      { src: "/mysql.svg", alt: "MySQL logo" },
      { src: "/postges.png", alt: "PostgreSQL logo" },
      { src: "/mongodb.svg", alt: "MongoDB logo" },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { src: "/docker.png", alt: "Docker logo" },
      { src: "/bash.png", alt: "Bash logo" },
      { src: "/linux.png", alt: "Linux logo" },
      { src: "/git.svg", alt: "Git logo" },
      { src: "/postman.svg", alt: "Postman logo" },
      { src: "/figma.svg", alt: "Figma logo" },
      { src: "/photoshop.svg", alt: "Photoshop logo" },
    ],
  },
];

const Stacks = () => {
  return (
    <Box mx={3}>
      <Heading fontSize="4xl" textAlign="center" mt={5} mb={8}>
        Tech Stack
      </Heading>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={6}
        my={8}
      >
        {TECH_STACK.map(({ title, items }) => (
          <Box
            key={title}
            textAlign="center"
            border="1px"
            borderColor="gray.200"
            p={6}
            borderRadius="md"
            boxShadow="md"
            _hover={{ boxShadow: "lg", transform: "scale(1.02)", transition: "all 0.2s" }}
          >
            <Text fontSize="2xl" fontWeight="bold" p={5} mb={3}>
              {title}
            </Text>
            <Box
              display="grid"
              gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]}
              gap={6}
              alignItems="center"
              justifyContent="center"
            >
              {items.map(({ src, alt }) => (
                <Image
                  key={src}
                  src={src}
                  boxSize={["50px", "70px", "100px"]}
                  alt={alt}
                  title={alt.replace(" logo", "")} // Add a tooltip for better UX
                />
              ))}
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Stacks;