import { ApolloProvider } from "@apollo/client";
import client from "../app/apollo/client";

import "../app/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
