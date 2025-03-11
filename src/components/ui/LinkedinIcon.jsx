import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link,useColorMode } from "@chakra-ui/react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
const LinkedinIcon =()=>{
  const {colorMode} = useColorMode();
    return(
        <Link as={NextLink} href="https://www.linkedin.com/in/iqbalmashal/">
          <FontAwesomeIcon icon={faLinkedin} 
          className={`text-3xl mx-2 ${colorMode ==="light" ? "text-black":"text-white"}`} />
        </Link>
    )
}
export default LinkedinIcon