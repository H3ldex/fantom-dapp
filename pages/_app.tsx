import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Home from "./index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
        <Home />
    </ChakraProvider>
  );
}

export default MyApp;
