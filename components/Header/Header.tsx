import React, { useEffect, useState } from "react";
import { RoughNotation } from "react-rough-notation";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
//TODO: Add mobile support
const Header = () => {
  const [showScheme, setShowScheme] = useState(false);
  const [showSonic, setShowSonic] = useState(false);
  const pages = [
    {
      title: "home",
      path: "/",
    },
    {
      title: "about",
      path: "/about",
    },
  ];

  useEffect(() => {
    setTimeout(() => setShowScheme(true), 500);
    setTimeout(() => setShowSonic(true), 1500);
  }, []);

  return (
    <div className="flex flex-row-reverse items-center relative px-4 py-4 mb-3 border-b border-opacity-100 dark:border-opacity-30">
      <span className="absolute left-4">
        <RoughNotation
          type="highlight"
          iterations={20}
          animationDuration={10000}
          show={showScheme}
          color="#f44336"
        >
          Scheme
        </RoughNotation>
        <span className={`inline-block duration-1000 transition-width ${showScheme ? "w-0" : "w-40"}`}></span>
        <RoughNotation
          type="highlight"
          iterations={20}
          animationDuration={10000}
          show={showSonic}
          color="#fff176"
        >
          <span className="dark:text-black">Sonic</span>
        </RoughNotation>
      </span>
      <ThemeToggle />
      {pages.reverse().map((page) => (
        <a className="mr-4" key={page.path} href={page.path}>
          {page.title}
        </a>
      ))}
    </div>
  );
};

export default Header;
