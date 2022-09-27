import deck from "../deck";

export let randomPlayerArray = [];
for (let i = 0; i < 2; i++) {
  let randomCard = deck[Math.floor(Math.random() * deck.length)];
  randomPlayerArray.push(randomCard);
}

export let randomDealerArray = [];
for (let i = 0; i < 1; i++) {
  let randomCard = deck[Math.floor(Math.random() * deck.length)];
  randomDealerArray.push(randomCard);
}
