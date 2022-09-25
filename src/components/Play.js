import React, { useEffect, useState } from "react";
import blackJackLogo from "../public/images/blackJackLogo.png";
import PrimaryButton from "../components/PrimaryButton";
import "./styles/Card.css";
import deck from "../deck";
import Card from "../components/Card";
import { randomPlayerArray, randomDealerArray } from "./RandomCardArray";

export default function Play() {
  const [playerDeck, setPlayerDeck] = useState(randomPlayerArray);
  const [dealerDeck, setDealerDeck] = useState(randomDealerArray);

  const [playerCount, setPlayerCount] = useState(0);
  const [dealerCount, setDealerCount] = useState(0);

  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);

  const [playerMessage, setPlayerMessage] = useState("");
  const [dealerMessage, setDealerMessage] = useState("");

  const [playerName, setPlayerName] = useState("");
  function hitButton() {
    const randomCard = Math.floor(Math.random() * deck.length);
    setPlayerDeck((playerDeck) => [...playerDeck, deck[randomCard]]);
  }

  function standButton() {
    const randomCard = Math.floor(Math.random() * deck.length);
    setDealerDeck((dealerDeck) => [...dealerDeck, deck[randomCard]]);
  }
  /*
  useEffect(() => {
    calculate(playerDeck, setPlayerScore);
    setPlayerCount(playerCount + 1);
  }, [playerDeck]);

  useEffect(() => {
    calculate(dealerDeck, setDealerScore);
    setDealerCount(dealerCount + 1);
  }, [dealerDeck]);
*/
  useEffect(() => {
    const playerNames = localStorage.getItem("Name");
    if (playerNames) {
      setPlayerName(playerNames);
    }
  }, []);
  /*
  const calculate = (playerDeck) => {
    let total = 0;
    deck.forEach((item) => {
      total += item.value;
    });
  };
*/
  return (
    <div>
      <img
        src={blackJackLogo}
        alt="Blackjack logo"
        className="blackjack-logo"
      />
      <h1>{playerName} velkommen til og spille Online BlackJack!</h1>
      <PrimaryButton text={"New game"} />
      <PrimaryButton text={"Hit"} onClick={hitButton} />
      <PrimaryButton text={"Stand"} onClick={standButton} />
      <h2>Dealer</h2>
      <div className="cardContainer">
        {dealerDeck.map((index, value) => {
          return <Card key={value} name={index.name} suit={index.suit} />;
        })}
      </div>
      <h2>Player</h2>
      <div className="cardContainer">
        {playerDeck.map((index, value) => {
          return <Card key={value} name={index.name} suit={index.suit} />;
        })}
      </div>
    </div>
  );
}
