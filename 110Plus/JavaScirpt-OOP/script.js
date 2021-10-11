function Person(firstName, birthYear, job) {
  this.firstName = firstName;
  // gelen deger  == parametredeki deger
  this.birthYear = birthYear;
  this.job = job;
  this.calculateAge = function () {
    return 2021 - this.birthYear;
  };
}

let yigit = new Person("yigit", 2011, "student");
let emel = new Person("emel", 1999, "assistant");

console.log(yigit.firstName);
console.log(emel.firstName);
console.log(emel.calculateAge());

