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


let val = $("p");

$(document).ready(function () {
  console.log("ready 1");
});

$(function () {
  $(".self-par").click(function () {
    $(this).addClass("self-par-color");
  });
});

console.log(val);
console.clear();

// jQery Change Event
$(document).ready(function () {
  $(".control").change(function () {
    console.log($(this).val());
  });
});

// jQery Show/Hide/Fade/Slide Events

$(document).ready(function () {
    //Show Hide
  $("#hide").click(function () {
    $(".oldLecture").hide(1000, function () {
      alert("Old Lectures Hid");
      return;
    });
  });

  $("#show").click(function () {
    $(".oldLecture").show(2000, function () {
      alert("Old Lectures Activated");
      return;
    });
  });

  $("#showHideToggle").click(function () {
    $(".oldLecture").toggle(2500, callbackMethod());
    return;
  });

  //Slide Up Down

  $("#slideUp").click(function () {
    $(".oldLecture").slideUp(1000);
  });

  $("#slideDown").click(function () {
    $(".oldLecture").slideDown(2000);
  });

  $("#slideToggle").click(function () {
    $(".oldLecture").slideToggle(2500, callbackMethod());
    return;
  });

  //Fade In Out To

  $("#fadeIn").click(function () {
    $(".oldLecture").fadeIn(1000);
  });

  $("#fadeOut").click(function () {
    $(".oldLecture").fadeOut(1000);
  });

  $("#fadeTo").click(function () {
    $(".oldLecture").fadeTo(1000,0.5);
  });

  $("#fadeBack").click(function () {
    $(".oldLecture").fadeTo(1000,1);
  });

  $("#fadeToggle").click(function () {
    $(".oldLecture").fadeToggle(2500, callbackMethod());
    return;
  });
});

function callbackMethod() {
  console.log("calbackmethod called after animation ended.");
  //use function beside of nested function. nested tripples the query but callback ends after finish.
  return;
}
