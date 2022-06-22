import React from "react";
import { ThemeProvider } from "next-themes";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
