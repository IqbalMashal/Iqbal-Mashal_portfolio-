import { useColorMode, IconButton } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label={`Switch to ${
        colorMode === "light" ? "dark" : "light"
      } mode`}
      variant="ghost"
      color="yellow.500"
      onClick={toggleColorMode}
      icon={
        <FontAwesomeIcon icon={colorMode === "light" ? faMoon : faSun} className="text-3xl mx-2" />
      }
    />
  )
}

export default DarkModeSwitch
