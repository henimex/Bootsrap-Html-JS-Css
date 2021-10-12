(function (a, b) {
  console.log(a, b);
})("esila", "ali");

function Question(hobby) {
  switch (hobby) {
    case "car":
      return function (name) {
        console.log("Hey " + name + " what color is this car");
      };
      break;
    case "book":
      return function (name) {
        console.log("Hey " + name + " who wrote this book");
      };
      break;
    case "sowftware":
      return function (name) {
        console.log("Hey " + name + " who is the inventos of JavaScript");
      };
      break;
    default:
      console.log(name + " Left");
  }
}

var carQuestion = Question('car');
carQuestion('Ali')

var bookQuestion = Question('book');
bookQuestion("ESILA")