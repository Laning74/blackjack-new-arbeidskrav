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

  const [playerAceScore, setPlayerAceScore] = useState(0);
  const [dealerAceScore, setDealerAceScore] = useState(0);

  const [playerMessage, setPlayerMessage] = useState("");
  const [dealerMessage, setDealerMessage] = useState("");

  const [playerName, setPlayerName] = useState("");

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

  useEffect(() => {
    handleScore();
    // console.log(dealerScore);
    // console.log(playerScore);
  }, [playerScore, dealerScore, playerDeck, dealerDeck]);

  function handleScore() {
    let calculatePlayer = 0;
    let calculateDealer = 0;
    // console.log(playerDeck);
    playerDeck.forEach((item) => {
      calculatePlayer += item.value;
    });
    setPlayerScore(calculatePlayer);

    dealerDeck.forEach((item) => {
      calculateDealer += item.value;
    });
    setDealerScore(calculateDealer);
    if (playerScore === 21) {
      setPlayerMessage("The winner! 🏆");
    } else if (playerScore > 21) {
      setPlayerMessage("Looser");
    }
    // console.log("Total player: " + calculatePlayer);
    // console.log("Total dealer: " + calculateDealer);
  }

  function hitButton() {
    // let newPlayerScore
    const randomCard = Math.floor(Math.random() * deck.length);
    setPlayerDeck((playerDeck) => [...playerDeck, deck[randomCard]]);
    // handleScore();
    // setPlayerScore(playerScore);

    // handleScore();
  }

  function standButton() {
    // let newDealerScore = calculatePlayer;
    const randomCard = Math.floor(Math.random() * deck.length);
    setDealerDeck((dealerDeck) => [...dealerDeck, deck[randomCard]]);
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
    console.log("playerdeck", playerDeck);
    console.log("dealerdeck", dealerDeck);
  }

  // function newGameButton() {
  //   return (
  //     <div>
  //       <StartPlay startToPlay={() => setStageMode("start")} />
  //     </div>
  //   );
  // }

  // return getPlayerScore;

  // const getScore = (playerCount, setPlayerScore) => {
  //   let totalScore = 0;

  //   for (let i = 0; i < playerCount.length; i++) {
  //     totalScore += playerCount[i];
  //     setPlayerScore(playerCount + 1);
  //   }
  //   return totalScore;
  // };

  // function calculate() {
  //   const calculatePlayer = (playerDeck, setPlayerScore);
  //   for (let i = 0; i < playerDeck.length; i++) setPlayerCount(playerCount + 1);
  // }
  // return calculatePlayer;

  // useEffect(() => {
  //   calculatePlayer(playerDeck, setPlayerScore);
  //   setPlayerCount(playerCount + 1);
  // }, [playerDeck]);

  // const calculatePlayer = (playerDeck, setPlayerScore);

  // function calculate(playerDeck) {
  //   let calculatePlayer = 0;
  //   for (let i = 0; i < playerDeck.length; i++) {
  //     // var card = playerDeck[i]["card " + i];
  //     // if (!isNaN(card)) {
  //     //   if (card >= 2 && card <= 6) {
  //     //     calculatePlayer++;
  //     //   } else if (card >= 10) {
  //     //     calculatePlayer--;
  //     //   }
  //     // } else if (card === "face or ace") {
  //     //   calculatePlayer--;
  //     // }
  //   }
  //   return calculatePlayer;
  // }

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

  // function ReduceAce(playerScore, playerAceScore) {
  //   while (playerScore > 21 && playerAceScore > 0) {
  //     playerScore -= 10;
  //     playerAceScore -= 1;
  //   }
  //   return playerScore;
  // }

  // function GetScore() {
  //   playerScore = ReduceAce(playerScore, playerAceScore);
  //   dealerScore = ReduceAce(dealerScore, dealerAceScore);
  //   let message = (playerMessage, dealerMessage) => {
  //     if (playerScore > 21) {
  //       message = "You Lose!";
  //     } else if (dealerScore > 21) {
  //       message = "You win!";
  //     }
  //     //both you and dealer <= 21
  //     else if (playerScore == dealerScore) {
  //       message = "Tie!";
  //     } else if (playerScore > dealerScore) {
  //       message = "You Win!";
  //     } else if (playerScore < dealerScore) {
  //       message = "You Lose!";
  //     }
  //   };
  // }
  // GetScore();

  //   function checkAce(card) {
  //     if (card[0] == "A") {
  //       return 1;
  //     }
  //     return 0;
  //   }

  // let calculate = 0;

  // deck.forEach((item) => {
  //   calculate = calculate + item.value;
  // });
  // console.log("TOTAL", calculate);
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
