import "../styles/globals.css";
import lightTheme from "../styles/theme/lightTheme";
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import { useEffect } from 'react';
import { initGA, logPageView } from '../files/analytics.js';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (!(window as any).GA_INITIALIZED) {
      initGA();
      (window as any).GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>Shelled</title>
      </Head>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
