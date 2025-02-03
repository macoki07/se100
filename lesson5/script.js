//ex 1
// function getNumberPromise() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(10);
//         }, 2000);
//     });
// }
// // Test the function
// getNumberPromise().then((value) => {
//     console.log(value); // Should log 10 after 2 seconds
// });

//ex 2
// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data retrieved");
//         }, 1000);
//     });
// }

// function processData(data) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(data + " and processed");
//         }, 2000);
//     });
// }

// function displayData(data) {
//     console.log(data);
// }

// // Chaining the functions
// fetchData()
//     .then((data) => processData(data))
//     .then((processedData) => displayData(processedData));

//ex 3
// Simulates fetching data from a server with a delay - Do not modify
// async function fetchData(serverName) {
//     console.log(`Fetching from ${serverName}...`);
//     await new Promise((resolve) => setTimeout(resolve, Math.random() * 3000 + 1000)); // Simulate delay
//     return `Data from ${serverName}`;
// }

// // Write your code here to fetch data from Server A, B, and C one by one
// async function getAllData() {
//     const dataA = await fetchData("Server A");
//     console.log(dataA);
    
//     const dataB = await fetchData("Server B");
//     console.log(dataB);
    
//     const dataC = await fetchData("Server C");
//     console.log(dataC);
// }

// // Call the main function - Do not modify
// getAllData();

//ex 4
// console.log(fetch('https://api-open.data.gov.sg/v2/real-time/api/twenty-four-hr-forecast'))
//ex 5


const api_key = 'T70AM3SB72NU77RY'
const symbol = 'MSFT';
const url = `https://www.alphavantage.co/query?function=EARNINGS&symbol=${symbol}&apikey=${api_key}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const annualEarnings = data.annualEarnings;
    const earnings2020 = annualEarnings.find(earnings => earnings.fiscalDateEnding === '2020-06-30');
    if (earnings2020) {
      console.log(`Microsoft's EPS for the fiscal year ending on ${earnings2020.fiscalDateEnding}: ${earnings2020.reportedEPS}`);
    } else {
      console.log('EPS data for 2020 not found.');
    }
  })
  .catch(error => console.error('Error fetching data:', error));
