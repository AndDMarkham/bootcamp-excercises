// const birthYear = parseInt(prompt('What year were you born?'));
// alert(parseInt(birthYear));

// const wage = prompt('How much do you make per hour in USD?');
// const hours = prompt('How many hours do you work per day, on average?');
// const days = prompt('How many days per month do you generally work?');

// let salary = wage * hours * days;

// document.write('Your monthly salary is roughly: $' + salary);

// let euroValue = prompt('Give me all your money!');

const euroValue = ('250');
const czechCrownRatio = 25.695;
const czechMoneyInMyPocket = czechCrownRatio * euroValue;
console.log(czechMoneyInMyPocket);

const hours = [3, 0, 1, 0, 6, 12, 0];
const sunday = 5;
console.log(hours[sunday]);

const days = ['pondeli', 'utery', 'streda', 'ctvrtek', 'patek'];
days.push('sobota', 'nedele');
console.log(days[0]);
console.log(days[2]);
console.log(days[5]);
console.log(days);


const chessboard = [
  [5, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 1, 1, 3],
  [0, 0, 0, 0, 0, 0, 1, 'K'],
  [0, 0, 0, 0, 3, 0, 2, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 6, 0],
];

console.log(chessboard);
chessboard[4][7] = 0;
chessboard[2][2] = 'K';
console.log(chessboard);
