import React, { useEffect, useState } from "react";
import blackJackLogo from "../images/blackjack_logo.png";
import PrimaryButton from "../components/PrimaryButton";
import "./styles/Card.css";
import deck from "../deck";
import Card from "../components/Card";
import { randomPlayerArray, randomDealerArray } from "./RandomCardArray";

export default function Play({ restartToPlay }) {
  const [playerDeck, setPlayerDeck] = useState(randomPlayerArray);
  const [dealerDeck, setDealerDeck] = useState(randomDealerArray);

  // const [playerCount, setPlayerCount] = useState(0);
  // const [dealerCount, setDealerCount] = useState(0);

  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);

  // const [playerAceScore, setPlayerAceScore] = useState(0);
  // const [dealerAceScore, setDealerAceScore] = useState(0);

  const [playerMessage, setPlayerMessage] = useState("");
  const [dealerMessage, setDealerMessage] = useState("");

  const [playerName, setPlayerName] = useState("");
  const [dealersTurn, setDealersTurn] = useState(false);

  const [score, setScore] = useState([]);
  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(playerScore));
  }, [playerScore]);

  // const [stageMode, setStageMode] = useState("start");
  // console.log(restartToPlay);
  useEffect(() => {
    const playerNames = localStorage.getItem("Name");
    if (playerNames) {
      setPlayerName(playerNames);
    }
  }, []);

  // useEffect(() => {
  //   checkAce();

  // }, []);

  useEffect(() => {
    handleScore();
    // console.log(dealerScore);
    // console.log(playerScore);
  }, [playerScore, dealerScore, playerDeck, dealerDeck]);

  const checkAce = () => {
    let calculatePlayer = 0;
    // console.log("player", playerDeck);
    playerDeck.forEach((deck) => {
      calculatePlayer += deck.value;
      if (calculatePlayer > 21 && deck.name === "A") {
        setPlayerScore(calculatePlayer - 10);
      } else {
        setPlayerScore(calculatePlayer);
      }
    });
  };

  function handleScore() {
    checkAce();

    let calculateDealer = 0;
    // console.log(playerDeck);
    // playerDeck.forEach((item) => {});
    // setPlayerScore(calculatePlayer);
    // console.log(dealerDeck);
    dealerDeck.forEach((item) => {
      calculateDealer += item.value;
    });

    setDealerScore(calculateDealer);
    if (playerScore === 21) {
      setPlayerMessage("The winner! 🏆");
    } else if (playerScore > 21) {
      setPlayerMessage("Looser");
    }
  }

  function hitButton() {
    // let newPlayerScore
    const randomCard = Math.floor(Math.random() * deck.length);
    setPlayerDeck((playerDeck) => [...playerDeck, deck[randomCard]]);
    // handleScore();
    // setPlayerScore(playerScore);
    handleScore();
  }

  function standButton() {
    setDealersTurn(true);
  }
  // let newDealerArray = [0];

  useEffect(() => {
    if (dealersTurn === true) {
      console.log("dealerscore", dealerScore);
      if (dealerScore < 17) {
        const randomCard = Math.floor(Math.random() * deck.length);
        setDealerDeck((dealerDeck) => [...dealerDeck, deck[randomCard]]);

        console.log("dealerDeck", dealerDeck);
      }

      // const randomCard = Math.floor(Math.random() * deck.length);
      // setDealerDeck((dealerDeck) => [...dealerDeck, deck[randomCard]]);
      // console.log(deck[randomCard]);
      // console.log(dealerDeck);
      // handleScore();

      if (dealerScore === 21) {
        setDealerMessage("The winner! 🏆");
        setPlayerMessage("Looser");
      }
      if (dealerScore > playerScore) {
        setDealerMessage("The winner! 🏆");
        setPlayerMessage("Looser");
      } else if (dealerScore < playerScore) {
        setPlayerMessage("The winner! 🏆");
        setDealerMessage("Looser");
      } else if (dealerScore === playerScore) {
        setPlayerMessage("Tie!");
        setDealerMessage("Tie!");
      }
    }
  }, [dealersTurn, dealerScore]);

  return (
    <div>
      <img
        src={blackJackLogo}
        alt="Blackjack logo"
        className="blackjack-logo"
      />
      <h1>{playerName} velkommen til og spille Online BlackJack!</h1>
      <PrimaryButton text={"New game"} onClick={restartToPlay} />

      {playerMessage === "" ? (
        <PrimaryButton text={"Hit"} onClick={hitButton} />
      ) : (
        ""
      )}

      <PrimaryButton text={"Stand"} onClick={standButton} />
      <h2>
        Dealer ({dealerScore}) {dealerMessage}
      </h2>
      <div className="cardContainer">
        {dealerDeck.map((index, value) => {
          return <Card key={value} img={index.img} />;
        })}
      </div>
      <h2>
        Player ({playerScore}) {playerMessage}
      </h2>
      <div className="cardContainer">
        {playerDeck.map((index, value) => {
          return <Card key={value} img={index.img} />;
        })}
      </div>
    </div>
  );
}
