const cards = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 'Jack', 'Queen', 'King'];
const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

const randomCard = cards[Math.floor(Math.random() * 12)];
const randomSuit = suits[Math.floor(Math.random() * 4)];

document.write('Your card is the ' + randomCard + ' of ' + randomSuit + '.');
