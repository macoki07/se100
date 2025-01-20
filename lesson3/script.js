// let stockprice = 300;
// console.log(stockprice);

// let money = 6000;
// money += 3000;
// console.log(money)
// money *=3;
// console.log(money)

// let company = "Micrsoft's"; // Use the correct quotation
// console.log(company);

// company = 'Micrsoft\'s'; // Use escape sequences
// console.log(company);

// const companyName = "Amazon";
// const companyRating = 5;

// const companyInfo = companyName + " has a customer satisfaction rating of " + companyRating;  // Use string concatenation
// console.log(companyInfo);

// const companyName = "Metaa";

// console.log(companyName.substring(0, 4)) // Use the substring method
// console.log(companyName.substring(0,4).toUpperCase()) // Use the toUpperCase method

// const DayOneClosingPrice = "87.14";
// const DayTwoClosingPrice = "84.22";

// const avgPrice = (parseFloat(DayOneClosingPrice) + parseFloat(DayTwoClosingPrice)) / 2;
// console.log(avgPrice);

// const TSLAClosingPrices = [230.12, 221.45, 225.61, 219.48, 227.52];
// teslaAvgClosingPrice = (TSLAClosingPrices[0] + TSLAClosingPrices[1] + TSLAClosingPrices[2] + TSLAClosingPrices[3] + TSLAClosingPrices[4]) / 5;
// console.log(teslaAvgClosingPrice);

// const AAPLCurrentBar = {
// 	open: 81.12,
// 	high: 82.59,
// 	low: 80.09,
// 	close: 84.71
// }

// const AAPLPrevBar = {
// 	open: 81.02,
// 	high: 82.49,
// 	low: 79.09,
// 	close: 83.71
// }

// const openPrice = (AAPLPrevBar.open +AAPLPrevBar.close)/2;
// const closePrice = (AAPLCurrentBar.open +AAPLCurrentBar.close +AAPLCurrentBar.high+AAPLCurrentBar.low)/4;
// const highPrice = Math.max(AAPLCurrentBar.high, AAPLCurrentBar.open, AAPLCurrentBar.close);
// const lowPrice = Math.min(AAPLCurrentBar.low, AAPLCurrentBar.open, AAPLCurrentBar.close);

// console.log(openPrice);
// console.log(closePrice);
// console.log(highPrice);
// console.log(lowPrice);

// (45 - 20) > 4 * 20 // false
// 2 * 3 < 4 * 5 || 90 - 45 > 4**3 // true
// 100 / 10 < (4 + 5) / 2 && !(32 < 20) // false

const stockOHLC = {
	open: 81.12,
	high: 82.59,
	low: 80.09,
	close: 84.71,
}

if(stockOHLC.open > stockOHLC.close){
    console.log("Stock is bearish");
}
else if(stockOHLC.open < stockOHLC.close){
    console.log("Stock is bullish");
}