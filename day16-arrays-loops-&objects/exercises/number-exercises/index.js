const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17]

// let variable = 0;

// for (i = 0; i < numbers.length - 1; i += 1) {
//     if (numbers[i] > variable) {
//         variable = numbers[i]
//     }
// }; console.log(variable);


// const bubbleSort = (array) => {
//   let swapped
//   let n = array.length - 1
//   do {
//     swapped = false
//     for (let i=0; i < n; i++)
//     {
//       if (array[i] > array[i+1])
//       {
//         const temp = array[i]
//         array[i] = array[i+1]
//         array[i+1] = temp
//         swapped = true
//       }
//     }
//   } 
//   while (swapped) 

//   return array
// }

// const sortedNumbers = bubbleSort(numbers);

// console.log(sortedNumbers[sortedNumbers.length - 2]);


// const sortReverse = (array) => {
//     let swapped;
//     let n = array.length - 1;
//     do {
//         swapped = false;
//         for (let i = 0; i < n; i += 1) {
//             if (array[i] < array[i + 1]) {
//                 const temp = array[i];
//                 array[i] = array [i + 1];
//                 array[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//     }
//     while (swapped);
    
//     return array;
// };

// const sorted = sortReverse(numbers);
// console.log(sorted);

// const newArray = []

// for (i = 0; i < numbers.length; i += 1) {
//     newArray.splice(Math.floor(Math.random() * numbers.length), 0, numbers[i]);
// }

// console.log(newArray);

// const reverseArray = [];

// for (i = 0; i < numbers.length; i += 1) {
//     reverseArray.unshift(numbers[i]);
// };
// console.log(numbers);
// console.log(reverseArray);

/* This is the bit where I start doing functions instead of fucking with the above array */

// const len = (array) => {
//     return array.length;
// };

// console.log(len(numbers));

const emptyArray = [];

// const last = (array) => {
//     if (array.length === 0) {
//         return null;
//     } else {
//         return array[array.length - 1]
//     }
// }

// console.log(last(emptyArray));
// console.log(last(numbers));

const shortArray = [9]

// const butLast = (array) => {
//     if (array.length <= 1) {
//         return null;
//     } else {
//         return array[array.length - 2];
//     }
// }

// console.log(butLast(emptyArray));
// console.log(butLast(shortArray));
// console.log(butLast(numbers));

// const elementAt = (array, k) => {
//     k -= 1;
//     if (array[k] === undefined) {
//         return null;
//     } else {
//         return array[k];
//     }
// }

// console.log(elementAt(shortArray, 2));
// console.log(elementAt(shortArray, 1));
// console.log(elementAt(numbers, 5));
// console.log(elementAt(numbers, 13));

// const reverse = (array) => {
//     let tempArray = [];
//     for (i = 0; i < array.length; i += 1) {
//         tempArray.unshift(array[i]);
//     } return tempArray;
// }

// console.log(numbers);
// console.log(reverse(numbers));

const paliArray = [1, 2, 3, 5, 6, 7, 6, 5, 4, 3, 2, 1];

const isPalindrome = (array) => {
    for (i = 0; i < array.length; i += 1) {
        if (array[i] === array[array.length - (1 + i)]) {
            return true;
        } else {
            return false;
        }
    } 
}

console.log(isPalindrome(paliArray));