import React, { FunctionComponent } from "react";
import { AppProps } from "next/app";

import ThemeProvider from "../providers/theme";

const MyApp: FunctionComponent<AppProps> = ({ Component, ...pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
