/** @format */

import React, { useEffect, useState } from "react";
import { Images, Images1 } from "../Images/Images";
import { shuffle } from "lodash";
import "./Card.css";

const Card = ({ open }) => {
  const [cards, setCards] = useState(shuffle([...Images, ...Images]));
  const [clicks, setClicks] = useState(0);
  const [won, setWon] = useState(false);
  const [activeCards, setActiveCards] = useState([]);
  const [foundPairs, setFoundPairs] = useState([]);
  const [score, setCounter] = useState(0);
  const [timer, setTimer] = useState(300);

  function flipCard(index) {
    if (won) {
      setCards(shuffle([...Images1, ...Images1]));
      setFoundPairs([]);
      setWon(false);
      setClicks(0);
    }
    if (activeCards.length === 0) {
      setActiveCards([index]);
    }
    if (activeCards.length === 1) {
      const firstIndex = activeCards[0];
      const secondsIndex = index;
      if (cards[firstIndex] === cards[secondsIndex]) {
        if (foundPairs.length + 2 === cards.length) {
          setWon(true);
        }
        setFoundPairs([...foundPairs, firstIndex, secondsIndex]);
        setCounter(score + 10);
      }
      setActiveCards([...activeCards, index]);
    }
    if (activeCards.length === 2) {
      setActiveCards([index]);
    }
    setClicks(clicks + 1);
  }

  const intervalFunction = () => {
    let j = 0;
    for (let i = 300; i >= 0; i--) {
      j = j + 1;

      setTimeout(() => {
        setTimer(i);
      }, j * 1000);
    }
    if (timer === 0) {
      setCounter(0);
    }
  };

  useEffect(() => {
    intervalFunction();
  }, []);

  if (!open) return null;

  return (
    <div>
      {open ? (
        <div className='container-homepage'>
          <h1>Timer : {timer}</h1>
          <h1>Score : {score}</h1>
          <div className='stats'>
            {won && (
              <>
                Click any card to play again.
                <br />
                <br />
              </>
            )}
            Found pairs : {foundPairs.length / 2}
          </div>
          <div>
            <div className='board'>
              {cards.map((card, index) => {
                const flippedToFront =
                  activeCards.indexOf(index) !== -1 ||
                  foundPairs.indexOf(index) !== -1;
                return (
                  <div
                    className={
                      "card-outer " + (flippedToFront ? "flipped" : "")
                    }
                    onClick={() => flipCard(index)}>
                    <div className='card'>
                      <div className='front'>
                        <img src={card} alt='' className='card-img' />
                      </div>
                      <div className='back' />
                    </div>
                  </div>
                );
              })}
            </div>

            <img
              src='https://www.ukras.org.uk/wp-content/uploads/2022/01/schools_comp__Character-5-853x1024.png'
              alt=''
              className='img-homepage-boy'
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
