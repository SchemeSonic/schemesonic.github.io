import type { NextPage } from "next";
import React from "react";
import MainFrame from "../components/MainFrame/MainFrame";
import Projects from "../components/Markdown/Projects/Projects.mdx";
import Music from "../components/Music/Music";
import styles from "./index.module.css";

const Home: NextPage = () => {
  const Avatar = () => (
    <div className={`text-center ${styles.avatarWrapper}`}>
      <div className={styles.mouth}>
        <div className={styles.leftFang}></div>
        <div className={styles.leftBlood}></div>
        <div className={styles.rightFang}></div>
        <div className={styles.rightBlood}></div>
      </div>
      <img
        className="rounded-full"
        alt="avatar"
        src={require("../public/images/avatar.png").default.src}
        width={256}
        height={256}
      />
    </div>
  );

  return (
    <MainFrame>
      <Avatar />
      <div className={styles.projects}>
        <Projects />
      </div>
      <Music />
    </MainFrame>
  );
};

export default Home;
