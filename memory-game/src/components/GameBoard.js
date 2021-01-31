import React, { useEffect, useState } from "react";
import MemoryCard from "./MemoryCard";

function GameBoard() {
  const [points, setPoints] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [firstCard, setFirstCard] = useState(0);
  const [secondCard, setSecondCard] = useState(0);
  const [isClicked, setIsClicked] = useState([]);
  const [lockGame, setLockGame] = useState(false);

  useEffect(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    setNumbers(shuffle(numbers));
  }, []);

  useEffect(() => {
    compareCards();
  }, [secondCard]);

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function updateScore() {
    setPoints(points + 1);
  }

  function compareCards() {
    if (firstCard === secondCard && firstCard !== 0) {
      setTimeout(function () {
        updateScore();
        reset();
      }, 1000);
    } else if (firstCard !== 0) {
      setTimeout(function () {
        reset();
        setIsClicked(isClicked.splice(0, isClicked.length - 2));
      }, 1000);
    }
  }

  function reset() {
    setFirstCard(0);
    setSecondCard(0);
    setLockGame(!lockGame);
  }

  return (
    <section>
      {points === 8 ? (
        <h2>You Won!</h2>
      ) : (
        <section className="game-plan">
          <div>
            <p>par: {points}</p>
          </div>
          <div className="game-board">
            {numbers.map((number, index) => {
              return (
                <MemoryCard
                  className={
                    isClicked.includes(index)
                      ? "memory-card flip"
                      : "memory-card"
                  }
                  index={index}
                  number={number}
                  key={index}
                  firstCard={firstCard}
                  secondCard={secondCard}
                  setFirstCard={setFirstCard}
                  setSecondCard={setSecondCard}
                  setIsClicked={setIsClicked}
                  isClicked={isClicked}
                  lockGame={lockGame}
                  setLockGame={setLockGame}
                />
              );
            })}
          </div>
        </section>
      )}
    </section>
  );
}

export default GameBoard;
