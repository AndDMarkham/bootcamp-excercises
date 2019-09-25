const acct1 = ['000256784', 790];
const acct2 = ['000986056', 5600];
const acct3 = ['001546238', 78065];
const acct4 = ['030987546', 120910];

let acctNumber = prompt("What is your account number?");

let action = prompt('What would you like to do? (e.g. balance, withdraw');


if (acctNumber === acct1[0]) {
    if (action === 'balance') {
      document.write(acct1[1]);
    } else if (action === 'withdraw') {
      let withdrawalAmt = prompt('how much money would you like to withdraw?');
      if (parseInt(withdrawalAmt) <= acct1[1]) {
        acct1[1] = acct1[1] - withdrawalAmt;
        document.write('Your remaining balance is ' + acct1[1]);
      } else if (parseInt(withdrawalAmt) > acct1[1]) {
        document.write('Insufficient funds');
           }
    } else {
      document.write ('Unknown action');
      }
} else if (acctNumber === acct2[0]) {
    if (action === 'balance') {
      document.write(acct2[1]);
    } else if (action === 'withdraw') {
      let withdrawalAmt = prompt('how much money would you like to withdraw?');
      if (parseInt(withdrawalAmt) <= acct2[1]) {
        acct2[1] = acct2[1] - withdrawalAmt;
        document.write('Your remaining balance is ' + acct2[1]);
      } else if (parseInt(withdrawalAmt) > acct2[1]) {
        document.write('Insufficient funds');
           }
    } else {
      document.write ('Unknown action');
      }
} else if (acctNumber === acct3[0]) {
    if (action === 'balance') {
      document.write(acct3[1]);
    } else if (action === 'withdraw') {
      let withdrawalAmt = prompt('how much money would you like to withdraw?');
      if (parseInt(withdrawalAmt) <= acct3[1]) {
        acct3[1] = acct3[1] - withdrawalAmt;
        document.write('Your remaining balance is ' + acct3[1]);
      } else if (parseInt(withdrawalAmt) > acct3[1]) {
        document.write('Insufficient funds');
           }
    } else {
      document.write ('Unknown action');
      }
} else if (acctNumber === acct4[0]) {
    if (action === 'balance') {
      document.write(acct4[1]);
    } else if (action === 'withdraw') {
      let withdrawalAmt = prompt('how much money would you like to withdraw?');
      if (parseInt(withdrawalAmt) <= acct4[1]) {
        acct4[1] = acct4[1] - withdrawalAmt;
        document.write('Your remaining balance is ' + acct4[1]);
      } else if (parseInt(withdrawalAmt) > acct4[1]) {
        document.write('Insufficient funds');
           }
    } else {
      document.write ('Unknown action');
      }
} else {
    document.write('No such account exists.');
};