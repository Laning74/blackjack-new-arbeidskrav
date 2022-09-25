import React from "react";
import "./styles/Card.css";

const Card = (props) => {
  return (
    <div className="card" key={props.index}>
      <h2 className="name">{props.name}</h2>
      <h2 className="suit">{props.suit}</h2>
    </div>
  );
};

export default Card;
