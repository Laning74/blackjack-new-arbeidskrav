import React, { useEffect, useState } from "react";
import blackJackLogo from "../images/blackjack_logo.png";

const StartPlay = ({ startToPlay }) => {
  const [name, setName] = useState("");

  localStorage.setItem("Name", name);

  return (
    <div>
      <img
        src={blackJackLogo}
        alt="Blackjack logo"
        className="blackjack-logo-front"
      />
      <h1>Vil du spille Online BlackJack?</h1>
      <input
        className="name-input"
        value={name}
        placeholder="Skriv inn ditt navn"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />
      <button className="startPlay" onClick={startToPlay}>
        Start playing BlackJack
      </button>
    </div>
  );
};

export default StartPlay;
