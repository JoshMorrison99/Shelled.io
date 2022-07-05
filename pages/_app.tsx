import "../styles/globals.css";
import lightTheme from "../styles/theme/lightTheme";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
