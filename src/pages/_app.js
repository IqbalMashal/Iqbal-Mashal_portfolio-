// pages/_app.js
import { ChakraProvider, Box } from '@chakra-ui/react'
import Layout from '../components/Layout'
import "../asset/css/global.css"
import Head from '@/app/head'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import theme from '@/components/ui/theme'
import { useColorMode } from '@chakra-ui/react'


config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const { colorMode } = useColorMode()
  const color = colorMode === "light" ? "black" : "white"
  
  return (
    <ChakraProvider theme={theme}>
      <Head />
      <Layout bg="black" color={color}>
          <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp


