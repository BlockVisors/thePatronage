import { ApolloProvider, ApolloClient } from "@apollo/client";
// import client from "../apollo-client";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
// import type { AppProps } from "next/app";

import Theme from "../theme";
import SiteSettings from "../components/site-settings";
import PageHead from "../components/head/static";

import "../styles/globals.css";



const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;

const { chains, provider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    chain.optimism,
    chain.arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? [chain.goerli, chain.kovan, chain.rinkeby, chain.ropsten]
      : []),
  ],
  [infuraProvider({ infuraId }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "web3rsvp",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={Theme}>
    <Theme>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <ApolloProvider client={ApolloClient}>
            {/* <Layout> */}
              <Component {...pageProps} />
            {/* </Layout> */}
          </ApolloProvider>
        </RainbowKitProvider>
      </WagmiConfig>
      </Theme>
     </ChakraProvider>
  );
}

