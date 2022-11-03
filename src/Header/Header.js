/** @format */

import React, { useState } from "react";
import Card from "../Card/Card";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  return (
    <div className=''>
      <div className='header-container'>
        <h1 className='header-title'>BrainCells Puzzle</h1>
        <img
          src='https://i.pinimg.com/originals/88/34/47/883447f0eba3c4eff4726be5cda3bd5a.gif'
          alt=''
          className='img-homepage'
        />
      </div>
      <img
        src='https://i.pinimg.com/originals/b2/87/6f/b2876f8a04eed3c9419856e403b014c0.gif'
        alt=''
        className='img-sun'
      />
      <div className={enabled ? "toggle is-active" : "toggle"}>
        <button
          onClick={() => {
            setIsOpen(true);
            setEnabled(!enabled);
          }}
          className='button'>
          Play
        </button>
        <img
          src='https://media4.giphy.com/media/l3V0rXVqEntiq54VG/giphy.gif'
          alt=''
          className='img-dog'
        />
      </div>

      <Card
        open={isOpen}
        closeButton={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export default Header;
