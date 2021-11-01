import type { NextPage } from "next";
import MainFrame from "../components/MainFrame/MainFrame";
import Projects from "../components/Markdown/Projects/Projects.mdx";
import Image from "next/image";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <MainFrame>
      <div className={styles.projects}>
        <h5 className="my-5 flex items-center">
          <Image
            alt="projects"
            src={require("../public/images/sword.png")}
            width={32}
            height={32}
          />
          <span className="ml-2">My Projects</span>
        </h5>
        <Projects />
      </div>
    </MainFrame>
  );
};

export default Home;
