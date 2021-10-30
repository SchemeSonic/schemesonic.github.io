import type { NextPage } from "next";
import Head from "next/head";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";

const Home: NextPage = () => {

  return (
    <div className="min-w-full min-h-screen bg-white dark:bg-black">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        Hello world!
        <ThemeToggle/>
      </div>
    </div>
  );
};

export default Home;
