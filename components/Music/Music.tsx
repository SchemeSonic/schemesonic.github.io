import React from "react";
import Image from "next/image";

const Music = () => {
  return (
    <div>
      <div className="my-5 mb-5 flex items-center text-lg">
        <Image
          alt="music"
          src={require("../../public/images/music.gif")}
          width={32}
          height={32}
        />
        <span className="ml-2">Music</span>
      </div>
      <div className="sm:flex">
        <div className="flex-1 mt-2 sm:pr-2 sm:mt-0">
          <iframe
            src="https://open.spotify.com/embed/playlist/3p2yljyJXmyP6yXjuJmFWm?utm_source=generator"
            width="100%"
            height="240"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
        <div className="flex-1 mt-2 sm:pl-2 sm:mt-0">
          <iframe
            src="https://open.spotify.com/embed/playlist/5EnVxCi6wKLhVOPiKd1a98?utm_source=generator"
            width="100%"
            height="240"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
      <div className="sm:flex mt-4">
        <div className="flex-1 mt-2 sm:pr-2 sm:mt-0">
          <iframe
            src="https://open.spotify.com/embed/playlist/0UvCTiw4zn2m8dhxCGINtP?utm_source=generator"
            width="100%"
            height="240"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
        <div className="flex-1 mt-2 sm:pl-2 sm:mt-0">
          <iframe
            src="https://open.spotify.com/embed/playlist/5VJ0uFrlyU54SJhTErGFOr?utm_source=generator"
            width="100%"
            height="240"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Music;
