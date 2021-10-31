import React from "react";
import Head from "next/head";
import Header from "../Header/Header";

interface IMainFrame {
  meta?: {
    title?: string;
    desc?: string;
  };
}

const MainFrame = ({ meta }: IMainFrame) => {
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
        <div className="mt-3">
            This is going to be body
        </div>
      </div>
    </div>
  );
};

export default MainFrame;
