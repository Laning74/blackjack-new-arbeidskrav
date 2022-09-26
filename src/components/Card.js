import React from "react";
import "./styles/Card.css";

const Card = (props) => {
  //const color = suit === "♦" || suit === "♥" ? "red" : "black";
  return (
    <div className="card" key={props.index}>
      <img src={props.img} alt="card-picture" className="card" />
    </div>
  );
};

export default Card;
