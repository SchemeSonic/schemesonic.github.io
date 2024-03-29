import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Howl } from "howler";
import styles from "./ThemeToggle.module.css";
const lightSound = new Howl({
  src: [require(`../../public/sounds/rooster.mp3`)],
});
const nightSound = new Howl({
  src: [require(`../../public/sounds/zombie.mp3`)],
});

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const onThemeChanged = (prevTheme: string) => {
    if (prevTheme === "light") {
      setTheme("dark");
      lightSound.stop();
      nightSound.play();
    } else {
      setTheme("light");
      lightSound.play();
      nightSound.stop();
    }
  };

  const lightIcon = (
    <svg
      className={`h-5 w-5 rounded-full text-gray-${
        resolvedTheme === "light" ? 600 : 400
      } ${(styles as any).rippleAnimation}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  const darkIcon = (
    <svg
      className={`h-5 w-5 rounded-full text-gray-${
        resolvedTheme === "dark" ? 300 : 400
      } ${(styles as any).rippleAnimation}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div id="theme-toggle">
      <div className="flex">
        {lightIcon}
        <div
          className={`w-12 h-5 flex items-center rounded-full mx-1 px-1 cursor-pointer ${
            resolvedTheme === "light" ? "bg-gray-300" : "bg-gray-700"
          }`}
          onClick={() => onThemeChanged(resolvedTheme as string)}
        >
          <div
            className={`w-4 h-4 rounded-full shadow-md transform transition duration-300 ease ${
              resolvedTheme === "dark"
                ? "translate-x-6 bg-purple-400"
                : "bg-yellow-200"
            }`}
          ></div>
        </div>
        {darkIcon}
      </div>
    </div>
  );
};

export default ThemeToggle;
