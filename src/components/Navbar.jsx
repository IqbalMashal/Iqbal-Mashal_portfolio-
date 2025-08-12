import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { Link, useDisclosure } from '@chakra-ui/react';
import DarkModeSwitch from "../components/ui/DarkModeSwitch";
import { useRouter } from 'next/router';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const isActive = (route) => {
    return router.pathname === route;
  };

  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="mb-5">
      <nav className="flex items-center justify-between flex-wrap p-6 ">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link as={NextLink} href="/" passHref={true} legacyBehavior={true}>
            <a>
              <span className="font-semibold text-xl tracking-tight">Iqbal Mashal</span>
            </a>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded  border-white hover:text-white hover:border-white"
            onClick={onToggle}
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`w-full ${isOpen || !isMobile ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
          <div className={`text-sm ${isMobile ? 'block' : 'flex'} lg:flex-grow`}>
            <div className={`${isMobile ? '' : 'flex justify-end'}`}>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-100}   // replace 64 with your navbar height
                className={`block text-xl  mr-4 ${isActive('/avbout') ? 'font-bold ' : 'font-medium'} cursor-pointer`}
                // onClick={scrolToTop}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-150}   // replace 64 with your navbar height
                className={`block text-xl mr-4  ${isActive('/projects') ? 'font-bold ' : 'font-medium'} cursor-pointer`}
                // onClick={scrollToTop}
              >
                Projects
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-90}   // replace 64 with your navbar height
                className={`block text-xl  mr-4 ${isActive('/contact') ? 'font-bold' : 'font-medium'} cursor-pointer`}
                // onClick={scrollToTop}
              >
                Contact
              </ScrollLink>
            </div>
          </div>
          <DarkModeSwitch />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;