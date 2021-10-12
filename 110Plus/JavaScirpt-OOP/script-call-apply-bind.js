//Call Apply Bind Biiiiiiind !!! this is importante
//Degisik bir kullanım

var welcome = function (a, b) {
  console.log(
    "welcome ",
    this.name + " Are you interested in " + a + " and " + b
  );
};

var tester = { firstName: "tester", name: "tester" };
var yigit = { name: "yigit" };
var ada = { name: "ada" };

welcome();

welcome.call(ada,'React','Angular');
welcome.call(yigit,'React','Angular');

welcome.apply(ada,['React','Angular']);
welcome.apply(yigit['React','Angular']);


let welcomeYigit = welcome.bind(yigit);
let welcomeAda = welcome.bind(ada);

welcomeYigit('React','Angular');
welcomeAda('React','Angular');

//Demo : Numeric Range

var num = {
  min: 0,
  max: 100,
  checkNumericRange: function (value) {
    if (typeof value !== "number") {
      return false;
    } else {
      return value >= this.min && value <= this.max;
    }
  },
};

console.log(num.checkNumericRange(120));
console.log(num.checkNumericRange(20));

var num1 = { min: 50, max: 60 };

console.log(num.checkNumericRange.call(num1, 55));
console.log(num.checkNumericRange.apply(num1, [55]));

var ellibesAtmisArasiAra = num.checkNumericRange.bind(num1)

console.log(ellibesAtmisArasiAra(61))
