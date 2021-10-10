let val = $("p");

$(document).ready(function () {
    console.log("ready 1")
});

$(function () {
    $(".self-par").click(function () {
        $(this).addClass("self-par-color")
    })
});

console.log(val);
