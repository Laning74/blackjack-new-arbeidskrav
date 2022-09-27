import React, { useEffect, useState } from "react";
import blackJackLogo from "../images/blackjack_logo.png";
import blackJackPlayBtn from "../images/blackjack_play_btn.png";

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
      {name === "" ? (
        name
      ) : (
        <img
          src={blackJackPlayBtn}
          alt="Blackjack logo"
          className="blackjack-play-btn"
          onClick={startToPlay}
        />
      )}

      {/* <button className="startPlay" onClick={startToPlay}>
        Start playing BlackJack
      </button> */}
    </div>
  );
};

export default StartPlay;

//  {
//    name === !"" ? (
//      <PrimaryButton text={"Start playing BlackJack"} onClick={startToPlay} />
//    ) : (
//      "startToPlay"
//    );
//  }
