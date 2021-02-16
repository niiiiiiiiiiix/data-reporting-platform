import data from "./data";

const allGenders = [...new Set(data.map((item) => item.gender))];
// let allShirtSize = [...new Set(data.map((item) => item.shirtSize))];
// let allIncome = [...new Set(data.map((item) => item.incomeMonth))];

// const arrayOfValues = Array(8).fill(0);
// for (let i = 0; i < allGenders.length; i++) {
//   for (let n of ) {
//     allGenders[i]
//   }
// }
// https://www.codewars.com/kata/597d75744f4190857a00008d/

const countA = data.reduce(function (n, person) {
  return n + (person.gender === allGenders[0]);
}, 0);

const countMale = data.reduce(function (n, person) {
  return n + (person.gender === allGenders[1]);
}, 0);
const countFemale = data.reduce(function (n, person) {
  return n + (person.gender === allGenders[2]);
}, 0);
const countFluid = data.reduce(function (n, person) {
  return n + (person.gender === allGenders[3]);
}, 0);
const countBi = data.reduce(function (n, person) {
  return n + (person.gender === allGenders[4]);
}, 0);
const countQueer = data.reduce(function (n, person) {
  return n + (person.gender === allGenders[5]);
}, 0);
const countPoly = data.reduce(function (n, person) {
  return n + (person.gender === allGenders[6]);
}, 0);
const countNB = data.reduce(function (n, person) {
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

// const percentageGender = countGender.map(
//   (count) => count / countGender.reduce((a, b) => a + b)
// );

export { allGenders, countGender };
