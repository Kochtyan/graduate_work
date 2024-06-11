import NextNProgress from "nextjs-progressbar";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "../app/utils/Providers";
import client from "../app/apollo/client";

import "../app/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <div className="container">
          <NextNProgress
            color="#6C29A3"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </ApolloProvider>
  );
}
