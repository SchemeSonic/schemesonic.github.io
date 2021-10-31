import { Howl } from "howler";
import React, { useEffect } from "react";

const MouseClickSound = () => {
  const registerMouseSound = () => {
    if (window) {
      const sound = new Howl({
        src: [require("../../public/click.mp3")],
        volume: .1
      });
      window.addEventListener("click", () => sound.play());
    }
  };

  useEffect(registerMouseSound, []);

  return null;
};

export default MouseClickSound;
