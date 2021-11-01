import React from "react";
import Head from "next/head";
import Header from "../Header/Header";

interface IMainFrame {
  meta?: {
    title?: string;
    desc?: string;
  };
}

const MainFrame = ({ meta, children }: React.PropsWithChildren<IMainFrame>) => {
  meta = { ...{ title: "SchemeSonic", desc: "Portfolio" }, ...meta };

  return (
    <div className="w-screen h-screen font-press-start">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4">
        <Header />
        <div id="main-content">{children}</div>
      </div>
    </div>
  );
};

export default MainFrame;
