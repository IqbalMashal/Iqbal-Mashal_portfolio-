import Navbar from './Navbar'
import Footer from './Footer'
import { MoonLoader } from 'react-spinners'
import { Box, useColorMode } from '@chakra-ui/react'
import { useState, useEffect } from 'react'


const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true) 
  const { colorMode } = useColorMode()
  const spinnerColor = colorMode === "light" ? "#1A202C" : "white"

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  
  return (
    <>
      <Navbar />
      {loading ? (
          <Box
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <MoonLoader color={spinnerColor} />
          </Box>
        ) : (
          <div className='md:container md:mx-auto'>
           {children}
        </div>
          )}
        
      <Footer/>
    </>
  )
}

export default Layout
