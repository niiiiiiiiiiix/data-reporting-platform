import data from "./data";

// let allShirtSize = [...new Set(data.map((item) => item.shirtSize))];
const allShirtSize = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

const countM = data.reduce(function (n, shirt) {
  return n + (shirt.shirtSize === allShirtSize[0]);
}, 0);

const count3XL = data.reduce(function (n, shirt) {
  return n + (shirt.shirtSize === allShirtSize[1]);
}, 0);
const countXS = data.reduce(function (n, shirt) {
  return n + (shirt.shirtSize === allShirtSize[2]);
}, 0);
const countS = data.reduce(function (n, shirt) {
  return n + (shirt.shirtSize === allShirtSize[3]);
}, 0);
const countXL = data.reduce(function (n, shirt) {
  return n + (shirt.shirtSize === allShirtSize[4]);
}, 0);
const countL = data.reduce(function (n, shirt) {
  return n + (shirt.shirtSize === allShirtSize[5]);
}, 0);
const count2XL = data.reduce(function (n, shirt) {
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
