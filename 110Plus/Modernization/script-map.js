$("#titleLes").text("Map ! Sets(Unique Values)");

let val;

const numbers = new Map();

numbers.set(1, "one");
numbers.set("2", "two");
numbers.set("3", 3);
numbers.set(4, 3);

val = numbers;
val = numbers.get(1);
val = numbers.get("3");
val = numbers.size;
val = numbers.has(1);
val = numbers.delete(4);
val = numbers.has(4);

for (var [key, value] of numbers) {
  console.log(key + " " + value);
}

for (var [key, value] of numbers.entries()) {
  console.log(key + " " + value);
}

console.log(val);

var first = new Map([
  [1, "one"],
  [2, "tow"],
  [3, "three"],
]);

var second = new Map([
  [4, "four"],
  [5, "five"],
]);

var merged = new Map([...first, ...second]);

console.log(merged);

// Sets
console.log("stores only unique values");
let setVal;
var mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add("iki");
mySet.add({ a: 1, b: 2 });
mySet.add(3);

let obj = { a: 1, b: 2 };

mySet.add(obj);

let mySet2 = new Set([1, 2, 3, 4]);

console.log(mySet);

//intersect
//Hem A hem B listesinde var olanlar
var intersect = new Set(Array.from(mySet).filter((x) => mySet2.has(x)));
console.log(intersect);

var intersect = new Set([...mySet].filter((x) => mySet2.has(x)));
console.log("Intersects : ",intersect);

//difference
// A listesinde var B listesinde yok
var dif = new Set([...mySet].filter((x) => !mySet2.has(x)));
console.log("Differences : " , dif)
