import data from "./data";

const allIncome = [...new Set(data.map((item) => item.incomeMonth))];
const allIncomeSorted = allIncome.sort((a, b) => a - b);

// const countOne = data.reduce(function (n, person) {
//   return n + (person.gender === allGenders[0]);
// }, 0);

// const countTwo = data.reduce(function (n, person) {
//   return n + (person.gender === allGenders[1]);
// }, 0);
// const countThree = data.reduce(function (n, person) {
//   return n + (person.gender === allGenders[2]);
// }, 0);
// const countFour = data.reduce(function (n, person) {
//   return n + (person.gender === allGenders[3]);
// }, 0);
// const countFive = data.reduce(function (n, person) {
//   return n + (person.gender === allGenders[4]);
// }, 0);
// const count = data.reduce(function (n, person) {
//   return n + (person.gender === allGenders[5]);
// }, 0);
// const countPoly = data.reduce(function (n, person) {
//   return n + (person.gender === allGenders[6]);
// }, 0);
// const countNB = data.reduce(function (n, person) {
//   return n + (person.gender === allGenders[7]);
// }, 0);

export { allIncome, allIncomeSorted, data };
