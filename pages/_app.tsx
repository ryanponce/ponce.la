import React from "react";
import type { AppProps } from "next/app";
import { Navigation } from "../components/Navigation";
import "../index.css";
import { PageContainer } from "../components/PageContainer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <div className="p-4">
        <Navigation />
        <PageContainer>
          <Component {...pageProps} />
        </PageContainer>
      </div>
    </React.Fragment>
  );
}

export default MyApp;
