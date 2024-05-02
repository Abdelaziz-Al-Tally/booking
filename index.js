const { calculatePrices } = require('./lib/index');
const arr = [
    { start_date: "5/1/2022", end_date: "15/1/2022", price: 5 },
    { start_date: "1/1/2022", end_date: "11/1/2022", price: 3 },
    { start_date: "2/1/2022", end_date: "13/1/2022", price: 10 },
    { start_date: "2/1/2022", end_date: "11/1/2022", price: 4 }
];
console.log({ firstEample: calculatePrices('1/1/2022', '15/1/2022', arr) });

const arr2 = [
    { start_date: "1/1/2022", end_date: "19/1/2022", price: 5 },
    { start_date: "4/1/2022", end_date: "11/1/2022", price: 10 },
    { start_date: "15/1/2022", end_date: "22/1/2022", price: 7 },
    { start_date: "3/1/2022", end_date: "12/1/2022", price: 3 }
];
console.log({ secondExample: calculatePrices('1/1/2022', '13/1/2022', arr2) });
