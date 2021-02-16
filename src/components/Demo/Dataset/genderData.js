import data from "./data";

let allGenders = [...new Set(data.map((item) => item.gender))];
// let allShirtSize = [...new Set(data.map((item) => item.shirtSize))];
// let allIncome = [...new Set(data.map((item) => item.incomeMonth))];

// console.log(allGenders);
// console.log(allShirtSize);
// console.log(allIncome);

// let agender = 0;
// let male = 0;
// let female = 0;
// let genderfluid = 0;
// let bigender = 0;
// let genderqueer = 0;
// let polygender = 0;
// let nonbinary = 0

let countA = data.reduce(function (n, person) {
  return n + (person.gender === allGenders[0]);
}, 0);

let countMale = data.reduce(function (n, person) {
  return n + (person.gender === allGenders[1]);
}, 0);
let countFemale = data.reduce(function (n, person) {
  return n + (person.gender === allGenders[2]);
}, 0);
let countFluid = data.reduce(function (n, person) {
  return n + (person.gender === allGenders[3]);
}, 0);
let countBi = data.reduce(function (n, person) {
  return n + (person.gender === allGenders[4]);
}, 0);
let countQueer = data.reduce(function (n, person) {
  return n + (person.gender === allGenders[5]);
}, 0);
let countPoly = data.reduce(function (n, person) {
  return n + (person.gender === allGenders[6]);
}, 0);
let countNB = data.reduce(function (n, person) {
  return n + (person.gender === allGenders[7]);
}, 0);

const countGender = [
  countA,
  countMale,
  countFemale,
  countFluid,
  countBi,
  countQueer,
  countPoly,
  countNB,
];

const percentageGender = countGender.map(
  (count) => count / countGender.reduce((a, b) => a + b)
);

export { allGenders, countGender, percentageGender };
