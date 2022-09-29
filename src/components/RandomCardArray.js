import deck from "../deck";

export const getRandomCard = () => {
  let randomCard = deck[Math.floor(Math.random() * deck.length)];
  return randomCard;
};
