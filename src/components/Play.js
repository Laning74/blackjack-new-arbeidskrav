import React, { useEffect, useState } from "react";
import blackJackLogo from "../images/blackjack_logo.png";
import PrimaryButton from "../components/PrimaryButton";
import "./styles/Card.css";
import deck from "../deck";
import Card from "../components/Card";
import { getRandomCard } from "./RandomCardArray";

export default function Play({ restartToPlay }) {
  const [playerDeck, setPlayerDeck] = useState([
    getRandomCard(),
    getRandomCard(),
  ]);
  const [dealerDeck, setDealerDeck] = useState([getRandomCard()]);

  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);

  const [playerMessage, setPlayerMessage] = useState("");
  const [dealerMessage, setDealerMessage] = useState("");

  const [playerName, setPlayerName] = useState("");
  const [dealersTurn, setDealersTurn] = useState(false);

  // Playerscore i localStorage
  useEffect(() => {
    const data = localStorage.getItem("Playerscore");
    if (data !== "") setPlayerScore(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("Playerscore", JSON.stringify(playerScore));
    // console.log(playerScore);
  }, [playerScore]);

  // Playername i localStorage
  useEffect(() => {
    const playerNames = localStorage.getItem("Name");
    if (playerNames) {
      setPlayerName(playerNames);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("playerName", JSON.stringify(playerName));
  }, [playerName]);

  // Poeng til Player og Dealer
  useEffect(() => {
    handleScore();
  }, [playerScore, dealerScore, playerDeck, dealerDeck]);

  // Funksjon for og sette Ess (A) til poeng 11 eller 1 og telle poeng/score player
  const checkAce = () => {
    let calculatePlayer = 0;
    playerDeck.forEach((deck) => {
      calculatePlayer += deck.value;
      if (calculatePlayer > 21 && deck.name === "A") {
        setPlayerScore(calculatePlayer - 10);
      } else {
        setPlayerScore(calculatePlayer);
      }
    });
  };

  // Funksjon for og telle poeng/score dealer + message
  function handleScore() {
    checkAce();

    let calculateDealer = 0;

    dealerDeck.forEach((item) => {
      calculateDealer += item.value;
    });

    setDealerScore(calculateDealer);
    if (playerScore === 21) {
      setPlayerMessage("The winner! 🏆");
      setDealerMessage("Looser");
    } else if (playerScore > 21) {
      setPlayerMessage("Looser");
      setDealerMessage("The winner! 🏆");
    }
  }

  // Funksjon for og få nytt kort når player trykker på Hit button
  function hitButton() {
    const randomCard = getRandomCard();
    setPlayerDeck((playerDeck) => [...playerDeck, deck[randomCard]]);

    handleScore();
  }

  // Når player trykker på Stand button får dealer random kort
  function standButton() {
    setDealersTurn(true);
  }

  useEffect(() => {
    if (dealersTurn === true) {
      if (dealerScore < 17) {
        const randomCard = Math.floor(Math.random() * deck.length);
        setDealerDeck((dealerDeck) => [...dealerDeck, deck[randomCard]]);
      }
      if (dealerScore === 21) {
        setDealerMessage("The winner! 🏆");
        setPlayerMessage("Looser!");
      }
      if (dealerScore > playerScore) {
        setDealerMessage("The winner! 🏆");
        // setPlayerMessage("Looser!");
      } else if (dealerScore < playerScore) {
        setPlayerMessage("The winner! 🏆");
        setDealerMessage("Looser!");
      } else if (dealerScore === playerScore) {
        setPlayerMessage("Tie!");
        setDealerMessage("Tie!");
      }
      if (dealerScore > 21) {
        setDealerMessage("Looser!");
      }
    }
  }, [dealersTurn, playerScore, dealerScore]);

  return (
    <div>
      <img
        src={blackJackLogo}
        alt="Blackjack logo"
        className="blackjack-logo"
      />
      <h1>{playerName} velkommen til å spille Online BlackJack!</h1>

      <PrimaryButton text={"New game"} onClick={restartToPlay} />

      {playerMessage === "" ? (
        <PrimaryButton text={"Hit"} onClick={hitButton} />
      ) : (
        ""
      )}

      <PrimaryButton text={"Stand"} onClick={standButton} />

      {/* {playerMessage && dealerMessage === "" ? (
        ""
      ) : (
        <PrimaryButton text={"Stand"} onClick={hitButton} />
      )} */}

      {/* {playerMessage && dealerMessage === "" ? (
        <PrimaryButton text={"Stand"} onClick={hitButton} />
      ) : (
        ""
      )} */}

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
