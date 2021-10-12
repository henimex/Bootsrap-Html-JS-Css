//Getter Setter Oldum Olası pek sevmedim alısamadım.
const person = {
  firstName: "John",
  lastName: "HenimeX",
  getFullName: function () {
    return `${person.firstName} ${person.lastName}`;
  },
  setFullName: function (value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.firstName = "test";
console.log(person.getFullName());
person.setFullName("Ferhat Oygur");
console.log(person.firstName);

Object.defineProperty(person, "fullName", {
  get: function () {
    return `${person.firstName} ${person.lastName}`;
  },
  set: function (value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
});

Object.defineProperty(person, "age", {
  value: 50,
  writable: true,
});

person.age = 55;

const person2 = {
  firstName: "Ali",
  lastName: "Alp",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person2.fullName = "Esila Oygur";

console.log(person2);
console.log(person);
