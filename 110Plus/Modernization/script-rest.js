$("#titleLes").text("Rest Parameters");

function sum() {
  let arr = Array.prototype.slice.call(arguments);
  let result = 0;
  arr.forEach(function (item) {
    result += item;
  });
  return result;
}

function sumES6(...arr) {
  let result = 0;

  arr.forEach((item) => (result += item));
  return result;
}

var sm1 = sum(15, 45, 74, 745, 57, 47, 57);
var sm2 = sumES6(15, 45, 74, 745, 57, 47, 57);

console.log(sm1);
console.log(sm2);

//!!!!!
function isDriver(age, ...years) {
  years.forEach((year) => console.log(2021 - year >= age));
}

isDriver(18,2015, 2017, 2002, 1983, 1989, 1999);
