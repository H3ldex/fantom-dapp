import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Team from "../components/team";
import Gallery from "../components/gallery";
import Roadmap from "../components/roadmap";
import About from "../components/about";
import Footer from "../components/footer";
import { Box, Container, Divider } from "@chakra-ui/react";
import rkTheme from "../themes/rkTheme";

import "@rainbow-me/rainbowkit/styles.css";
import {
  apiProvider,
  Chain,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, createClient, WagmiProvider } from "wagmi";

const operaChain: Chain = {
  id: 250,
  name: "Fantom Opera",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM",
  },
  rpcUrls: {
    default: "https://rpc.ftm.tools/",
  },
  blockExplorers: {
    default: { name: "FTMScan", url: "https://ftmscan.com/" },
    etherscan: { name: "FTMScan", url: "https://ftmscan.com/" },
  },
  testnet: false,
};

const { chains, provider } = configureChains(
  [chain.mainnet, operaChain],
  [
    apiProvider.alchemy(process.env.ALCHEMY_ID),
    apiProvider.jsonRpc((chain) => ({ rpcUrl: chain.rpcUrls.default })),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Melting Animals App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const Home: NextPage = () => {
  return (
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={rkTheme}>
        <Box bgColor='brand.100'>
          <Container pt="15px" maxWidth="1280px">
            <Navbar />
            <Hero />
          <Gallery />
            <About />
            <Divider sx={{ height: 1, width: 'auto' }} pb='12px' borderColor="black" orientation='horizontal'/>
            <Roadmap />
            <Divider sx={{ height: 1, width: 'auto' }} pb='12px' borderColor="black" orientation='horizontal'/>
            <Team />
            </Container>
          <Footer />
        </Box>
      </RainbowKitProvider>
    </WagmiProvider>
  );
};

export default Home;
