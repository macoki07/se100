// const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];

// // Write your code below
// let sum = 0;
// for (let i = 0; i < MSFTStockClosingPrices.length; i++) {
//     sum += MSFTStockClosingPrices[i];
// }
// console.log("The total sum of closing prices of MSFT is " + sum );

// const MSFTStockClosingPrices = [
//   {
//     Monday: 254.12,
//     Tuesday: 253.12,
//     Wednesday: 256.97,
//     Thursday: 257.52,
//     Friday: 258.93,
//   },
//   {
//     Monday: 292.2,
//     Tuesday: 289.73,
//     Wednesday: 291.04,
//     Thursday: 294.55,
//     Friday: 296.29,
//   },
// ];

// // Write your code below
// let sum = 0;
// // Loop through each week using a plain for loop
// for (let i = 0; i < MSFTStockClosingPrices.length; i++) {
//   let week = MSFTStockClosingPrices[i];

//   // Loop through each day in the current week using a plain for loop
//   let days = Object.keys(week);
//   for (let j = 0; j < days.length; j++) {
//     sum += week[days[j]];
//   }
// }
// console.log("The total sum of closing prices of MSFT is " + sum.toFixed(2));

// const MSFTStockClosingPrices = [
//   {
//     Monday: 254.12,
//     Tuesday: 253.12,
//     Wednesday: 256.97,
//     Thursday: 257.52,
//     Friday: 258.93,
//   },
//   {
//     Monday: 292.2,
//     Tuesday: 289.73,
//     Wednesday: 291.04,
//     Thursday: 294.55,
//     Friday: 296.29,
//   },
// ];

// // Write your code below
// let sum = 0;
// for (let i = 0; i < MSFTStockClosingPrices.length; i++) {
//     let week = MSFTStockClosingPrices[i];
//     for (day in week){
//         sum += week[day];
//     }
// }
// console.log("The total sum of closing prices of MSFT is " + sum.toFixed(2) );

// const MSFTStockClosingPrices = [
//   {
//     Monday: 254.12,
//     Tuesday: 253.12,
//     Wednesday: 256.97,
//     Thursday: 257.52,
//     Friday: 258.93,
//   },
//   {
//     Monday: 292.2,
//     Tuesday: 289.73,
//     Wednesday: 291.04,
//     Thursday: 294.55,
//     Friday: 296.29,
//   },
// ];

// // Write your code below
// let i = 0;
// let sum = 0;
// while (i < MSFTStockClosingPrices.length) {
//   let week = MSFTStockClosingPrices[i];
//   let days = Object.keys(week);
//   let j = 0;
//   while (j < days.length) {
//     sum += week[days[j]];
//     j++;
//   }
//   i++;
// }

// console.log("The total sum of closing prices of MSFT is " + sum.toFixed(2));

// function getBetween() {
//   const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];

//   // Initialize a counter for prices between 254 and 257
//   let count = 0;

//   // Loop through each price in the array
//   for (let i = 0; i < MSFTStockClosingPrices.length; i++) {
//     if (MSFTStockClosingPrices[i] > 254 && MSFTStockClosingPrices[i] < 257) {
//       count++;
//     }
//   }

//   // Log the result in the console
//   console.log(`Number of closing prices between 254 and 257: ${count}`);
// }

// getBetween();

// const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
// const AAPLStockClosingPrices = [256.45, 255.25, 259.1, 260.75, 261.88];

// // Write your code below
// function getBetween(array, name) {
//   let count = 0;
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] > 254 && array[index] < 257) {
//       count++;
//     }
//   }
//   console.log(`Closing price of ${name} between 254 to 257: ${count} days`);
// }

// getBetween(MSFTStockClosingPrices, "MSFT");
// getBetween(AAPLStockClosingPrices, "AAPL");

// const StockDailyPerformance = [3.1, 2.4, 1.1, 2.8, 4.5, 2.7]

// // Write your code below
// function sortNumbersAscending(array){
//     // return array.sort();
//     console.log("Sorted daily performance: [" + array.sort() + "]")
// }

// // Do not modify this code:
// sortNumbersAscending(StockDailyPerformance);

const StockDailyPerformance = [3.1, 2.4, 1.1, 2.8, 4.5, 2.7]

// Write your code below
const sortNumbersAscending = (array) => {
    // return array.sort();
    console.log("Sorted daily performance: [" + array.sort() + "]")
}

// Do not modify this code:
sortNumbersAscending(StockDailyPerformance);