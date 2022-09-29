import React from "react";
import "./styles/Card.css";

const Card = (props) => {
  return (
    <div className="card" key={props.index}>
      <img src={props.img} alt="card" className="card" />
    </div>
  );
};

export default Card;
