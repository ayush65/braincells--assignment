/** @format */

import React, { useEffect } from "react";
import "./Audio.css";

import useSound from "use-sound";
import boopSfx from "../Audio/background-music.mp3";

const Audio = () => {
  const [play] = useSound(boopSfx);

  useEffect(() => {
    play();
  });

  return <div></div>;
};

export default Audio;
