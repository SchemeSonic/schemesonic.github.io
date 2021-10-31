import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import MouseClickSound from "../components/MouseClickSound/MouseClickSound";
import "../next-env.d.ts";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <MouseClickSound />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
