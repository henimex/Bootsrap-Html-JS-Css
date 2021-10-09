//Loops

for (let i = 1; i < 10; i++) {
  console.log("Döngü Başı");
  if (i == 3) {
    console.log("Fav Numebr is : " + i);
    continue;
  }

  if (i == 6) {
    console.log("Bad Number " + i, " Breaked");
    break;
  }
  console.log(i);
  console.log("Döngü Sonu");
  console.log(":::::::::::");
}

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let val = "\n";
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i : ${i} j : ${j}`);
    val += "* ";
  }
  val += "\n";
}

console.log(val);

let cars = ["Bmw", "Mercedes", "Toyota"];
let people = [
  { firstName: "JK", lastName: "Pole" },
  { firstName: "Jack", lastName: "Holie" },
  { firstName: "Ken", lastName: "Martin" },
];

for (let i = 0; i < cars.length; i++) {
  console.log("Araba : ", cars[i]);
}

//ForIn
for (const key in cars) {
  if (Object.hasOwnProperty.call(cars, key)) {
    const element = cars[key];
    console.log(`${key} ${element}`);
    console.log(
      "Arasında ki farkı cok analayamadım ama burda key yada i degeri index numarasını donuyor."
    );
    console.log("Boş olan fomr arrayde denenebilir.");
  }
}

// For Of
for (const iterator of people) {
  console.log("iterator ", iterator.firstName);
}

cars.forEach(function (item) {
  console.log("ForEach ", item);
});
