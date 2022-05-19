import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Team from "../components/team";
import Gallery from "../components/gallery";
import Roadmap from "../components/roadmap";
import { Box, Container } from "@chakra-ui/react";

import "@rainbow-me/rainbowkit/styles.css";
import {
  apiProvider,
  Chain,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, createClient, WagmiProvider } from "wagmi";
import { BlockExplorer } from "@wagmi/core/dist/declarations/src/constants";

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
  appName: "Fantom Dapp",
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
      <RainbowKitProvider chains={chains}>
        <Box>
          <Container pt="15px" maxWidth="1280px">
            <Navbar />
            <Hero />
            <Gallery />
            <Team />
            <Roadmap />
          </Container>
        </Box>
      </RainbowKitProvider>
    </WagmiProvider>
  );
};

export default Home;
