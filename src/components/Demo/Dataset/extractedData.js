import data from "./data";

let allGenders = [...new Set(data.map((item) => item.gender))];
let allShirtSize = [...new Set(data.map((item) => item.shirtSize))];
let allIncome = [...new Set(data.map((item) => item.incomeMonth))];

// console.log(allGenders);
// console.log(allShirtSize);
// console.log(allIncome);

export { allGenders, allShirtSize, allIncome };
