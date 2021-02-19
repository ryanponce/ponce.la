import { AppPropsType } from "next/dist/next-server/lib/utils";
import { createGlobalStyle } from "styled-components";
import "modern-css-reset";

const GlobalStyle = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
`;

export default function App({ Component, pageProps }: AppPropsType) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
