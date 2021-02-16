import data from "./data";

// let allShirtSize = [...new Set(data.map((item) => item.shirtSize))];
let allShirtSize = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

let countM = data.reduce(function (n, shirt) {
  return n + (shirt.shirtSize === allShirtSize[0]);
}, 0);

let count3XL = data.reduce(function (n, shirt) {
  return n + (shirt.shirtSize === allShirtSize[1]);
}, 0);
let countXS = data.reduce(function (n, shirt) {
  return n + (shirt.shirtSize === allShirtSize[2]);
}, 0);
let countS = data.reduce(function (n, shirt) {
  return n + (shirt.shirtSize === allShirtSize[3]);
}, 0);
let countXL = data.reduce(function (n, shirt) {
  return n + (shirt.shirtSize === allShirtSize[4]);
}, 0);
let countL = data.reduce(function (n, shirt) {
  return n + (shirt.shirtSize === allShirtSize[5]);
}, 0);
let count2XL = data.reduce(function (n, shirt) {
  return n + (shirt.shirtSize === allShirtSize[6]);
}, 0);

const countShirtSize = [
  countXS,
  countS,
  countM,
  countL,
  countXL,
  count2XL,
  count3XL,
];

export { allShirtSize, countShirtSize };
