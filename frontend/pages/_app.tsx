import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"

import axios from "axios"

axios.defaults.baseURL =  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:9000';

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
