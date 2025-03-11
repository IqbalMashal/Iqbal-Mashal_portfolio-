import NextLink from "next/link";
import { useColorMode, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GithubIcon = () => {
  const { colorMode } = useColorMode();

  return (
    <Link as={NextLink} href="https://github.com/IqbalMashal">
      <FontAwesomeIcon
        icon={faGithub}
        className={`text-3xl mx-2 ${
          colorMode === "light" ? "text-black" : "text-white"
        }`}
      />
    </Link>
  );
};

export default GithubIcon;
