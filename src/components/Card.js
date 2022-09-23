import React from "react";
import "./styles/Card.css";

const Card = (props) => {
  return (
    <div className="card" key={props.index}>
      <h2>{props.name}</h2>
      <h2>{props.suit}</h2>
    </div>
  );
};

export default Card;
