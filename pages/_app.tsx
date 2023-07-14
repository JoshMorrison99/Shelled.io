import "../styles/globals.css";
import lightTheme from "../styles/theme/lightTheme";
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import { useEffect } from 'react';
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>Shelled</title>
      </Head>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Script
    strategy="afterInteractive"
    src={`https://www.googletagmanager.com/gtag/js?id=G-P3S8Q6NMY4`}
/>
<Script id="google-analytics" strategy="afterInteractive">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-P3S8Q6NMY4');
    `}
</Script>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
