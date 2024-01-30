import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

function PlayButton({ detailSurat }) {
  const audio = useRef(new Audio());
  const [play, setPlay] = useState(false);
  const handlePlay = () => {
    setPlay(!play);
    !play ? audio.current.play() : audio.current.pause();
  };
  useEffect(() => {
    setPlay(false);
    audio.current.src = detailSurat?.audioFull["05"];
  }, [detailSurat]);
  return (
    <button
      onClick={handlePlay}
      className="p-[10px] text-xs rounded-full bg-primary text-white"
    >
      {play ? <FaPause /> : <FaPlay />}
    </button>
  );
}

export default PlayButton;
