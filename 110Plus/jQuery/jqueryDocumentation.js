//JQUERY CSS Managment
console.log($("#liste"));
console.log($("h3"));
console.log($(".item"));
console.log($("li"));
console.log($("ul li a")); //ul nin li nin altındaki a ları getir
console.log($("#liste li a"));

console.clear();

let header = $("#header");
let list = $("#liste");
let listElements = $("#liste li");
header.css("color", "blue");
list.css({ border: "1px solid red", color: "yellow" });

var styles = {
  color: "purple",
  fontSize: "30px",
  border: "1px solid cyan",
};

var li_styles = {
  color: "yellow",
  fontSize: "10px",
  fontFamily: "Helvetica",
  border: "1px solid red",
};

header.css(styles);
listElements.css(li_styles);

console.log(header);

console.log($("#liste"));
console.log($("h3"));
console.log($(".item"));
console.log($("li"));
console.log($("ul li a")); //ul nin li nin altındaki a ları getir
console.log($("#liste li a"));
console.clear();

let header = $("#header");
let list = $("#liste");
let listElements = $("#liste li");

let val;

val = $("h1").text();
val = $("ul").text();
val = $("#liste li").text();

$("h1").text("Java Script Modded");

val = $("input").val("Input Value Set via JS");

console.log(val);

function save() {
  var name = $("#name").val();
  var surname = $("#surName").val();

  console.log(name, surname);
  $("#name").addClass("highlight")
  $("#btnSave").addClass("accapted")
  $("#btnSave").removeClass("accapted")
  $("#btnSave").toggleClass("accapted") //yoksa ekler varsa cıakrtır
  $("img").attr("width","600")
}
