import React from "react";
import blackJackLogo from "../images/blackjack_logo.png";

export default function Play() {
  return (
    <div>
      <img
        src={blackJackLogo}
        alt="Blackjack logo"
        className="blackjack-logo"
      />
      <h1>Vil du spille Online Blackjack?</h1>
    </div>
  );
}
