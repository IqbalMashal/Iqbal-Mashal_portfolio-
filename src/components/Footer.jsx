// import InstagramIcon from "./ui/InstagramIcon"
// import TwitterIcon from "./ui/TwitterIcon"
import GithubIcon from "./ui/GithubIcon"
import LinkedinIcon from "./ui/LinkedinIcon"
import { Box, Flex, Spacer, useBreakpointValue } from "@chakra-ui/react"

const Footer = () => {
  const display = useBreakpointValue({ base: "block", md: "flex" })
  const justify = useBreakpointValue({ base: "center", md: "space-between" })
  const flexDirection = useBreakpointValue({ base: "column", md: "row" })

  return (
    <Box mt={10} borderTopWidth="1px" borderTopColor="gray.300">
      <Flex flexDirection={flexDirection} alignItems="center" justifyContent={justify} p={5}>
        <Box as="span" fontWeight="semibold" fontSize="xl" mb={{ base: 5, md: 0 }}>
          Iqbal Mashal
        </Box>
        <Spacer />
        <Box display={display} justifyContent="center" spacex={5}>
          <GithubIcon/>
          <LinkedinIcon/>
        </Box>
      </Flex>
    </Box>
  )
}

export default Footer


