import React, { useState } from "react";
import "./card.css";

function Card() {
  const questions=([
    {quest : "Start", photo: "" },
    {quest: "what pokemon was created first?", photo: <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0b3d1204-c7aa-4194-bcf0-3287392c92e8/d2y702a-21f0e923-8c62-4f2b-93b7-bb0ce86cdbcf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBiM2QxMjA0LWM3YWEtNDE5NC1iY2YwLTMyODczOTJjOTJlOFwvZDJ5NzAyYS0yMWYwZTkyMy04YzYyLTRmMmItOTNiNy1iYjBjZTg2Y2RiY2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wrW6pGQHfZzlCVmz3zklg25jpQ936nlg0Y4CWQ2rG-M" alt="bulbasaur" />},
    {quest: "Whos that pokemon?", photo: <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/633.png" alt="bulbasaur" />},
    {quest: "what are the only 2 typings that are weak to itself?"}
  ]);

  const answers = ([
    {ans: "press next to continue", photo: ""},
    {ans: "Rhydon ", photo: <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png" alt="ryhorn" />},
    {ans: "It's a Deino", photo: <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/633.png" alt="deino" />},
    {ans: "Ghost and Dragon type", photo: ""},
    {},
    {},
  ]);

  const [isActive, setIsActive] = useState(false);
  const [randomIndex, setRandomIndex] = useState(0);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleNext = () => {
    let newIndex = Math.floor(Math.random() * (questions.length - 1)) + 1;
    setRandomIndex(newIndex);
    
    setIsActive(false);
  };

  return (
    <div className="card">
      <h5>Number of questions: {questions.length - 1}</h5>
      <button className={isActive ? "cButton-active" : "cButton"} onClick={handleClick}>
        <div>
          {isActive ?  answers[randomIndex].ans : questions[randomIndex].quest}
          <br />
          {isActive ? answers[randomIndex].photo : questions[randomIndex].photo}
        </div>
      </button>
      <div className="container">
        <button className="aButton" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Card;