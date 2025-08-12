import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Box,
  Heading,
  Badge,
  Button,
  useColorMode,
  Flex,
  useBreakpointValue,
  Container,
  Text
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import projectShowcaseData from '../asset/api/project.json';

const Project = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.800' };
  const borderColor = { light: 'gray.200', dark: 'gray.600' };
  const textColor = { light: 'gray.600', dark: 'gray.300' };
  const router = useRouter();

  const [projectShowcase, setProjectShowcase] = useState(projectShowcaseData);

  const handleLinkClick = (url) => {
    router.push(url);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: useBreakpointValue({ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }),
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    // Add custom CSS for better spacing
    dotsClass: "slick-dots custom-dots",
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: colorMode === 'light' ? '#CBD5E0' : '#4A5568'
        }}
      />
    )
  };

  return (
    <Container maxW="7xl" py={12}>
      <Box textAlign="center" mb={12}>
        <Heading 
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} 
          mb={4}
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
          fontWeight="extrabold"
        >
          My Projects
        </Heading>
        <Text 
          fontSize={{ base: 'md', md: 'lg' }} 
          color={textColor[colorMode]}
          maxW="2xl"
          mx="auto"
        >
          Explore my latest work and creative endeavors
        </Text>
      </Box>

      <Box 
        sx={{
          '.slick-slide': {
            padding: '0 12px', // Add horizontal padding between slides
          },
          '.slick-track': {
            display: 'flex',
            alignItems: 'stretch', // Make all cards same height
          },
          '.slick-slide > div': {
            height: '100%',
          },
          '.custom-dots': {
            bottom: '-50px',
            '& li': {
              margin: '0 6px',
            },
            '& li.slick-active div': {
              backgroundColor: colorMode === 'light' ? '#3182CE' : '#63B3ED'
            }
          }
        }}
      >
        <Slider {...settings}>
          {projectShowcase.length > 0 ? (
            projectShowcase.map((project, index) => (
              <Box key={project.title} h="100%">
                <Box
                  bg={bgColor[colorMode]}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={borderColor[colorMode]}
                  overflow="hidden"
                  boxShadow="lg"
                  transition="all 0.3s ease-in-out"
                  _hover={{ 
                    transform: 'translateY(-8px)',
                    boxShadow: '2xl',
                    borderColor: colorMode === 'light' ? 'blue.200' : 'blue.400'
                  }}
                  h="100%"
                  display="flex"
                  flexDirection="column"
                >


                  {/* Content Container */}
                  <Box p={6} flex="1" display="flex" flexDirection="column">
                    <Heading 
                      size="lg" 
                      mb={3}
                      color={colorMode === 'light' ? 'gray.800' : 'white'}
                      noOfLines={1}
                    >
                      {project.title}
                    </Heading>
                    
                    <Text 
                      color={textColor[colorMode]}
                      mb={4}
                      fontSize="sm"
                      lineHeight="1.6"
                      flex="1"
                      noOfLines={3}
                    >
                      {project.description}
                    </Text>

                    {/* Tech Stack */}
                    <Box mb={6}>
                      <Flex wrap="wrap" gap={2}>
                        {Array.isArray(project.stack) ? (
                          project.stack.map((stack, stackIndex) => (
                            <Badge 
                              key={stackIndex}
                              colorScheme="blue"
                              variant="subtle"
                              fontSize="xs"
                              px={2}
                              py={1}
                              borderRadius="full"
                            >
                              {stack.trim()}
                            </Badge>
                          ))
                        ) : (
                          <Badge 
                            colorScheme="blue"
                            variant="subtle"
                            fontSize="xs"
                            px={2}
                            py={1}
                            borderRadius="full"
                          >
                            {project.stack}
                          </Badge>
                        )}
                      </Flex>
                    </Box>

                    {/* Action Buttons */}
                    <Flex gap={3} mt="auto">
                      <Button
                        size="sm"
                        colorScheme="blue"
                        variant="solid"
                        leftIcon={<FontAwesomeIcon icon={faGlobe} />}
                        onClick={() => handleLinkClick(project.live)}
                        flex="1"
                        _hover={{
                          transform: 'translateY(-2px)',
                          boxShadow: 'md'
                        }}
                      >
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        colorScheme="gray"
                        leftIcon={<FontAwesomeIcon icon={faGithub} />}
                        onClick={() => handleLinkClick(project.github)}
                        flex="1"
                        _hover={{
                          transform: 'translateY(-2px)',
                          boxShadow: 'md',
                          borderColor: 'gray.400'
                        }}
                      >
                        Repository
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            ))
          ) : (
            <Box textAlign="center" py={20}>
              <Heading size="md" color={textColor[colorMode]} mb={2}>
                No Projects Found
              </Heading>
              <Text color={textColor[colorMode]}>
                Check back soon for exciting new projects!
              </Text>
            </Box>
          )}
        </Slider>
      </Box>
    </Container>
  );
};

export default Project;