//#region jQery Show/Hide/Fade/Slide Events
$(document).ready(function () {
  //Show Hide
  $("#hide").click(function () {
    $(".oldLecture").hide(1000, function () {
      alert("Old Lectures Hid");
      return;
    });
  });

  $("#show").click(function () {
    $(".oldLecture").show(2000);
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
    $(".oldLecture").fadeTo(1000, 0.5);
  });

  $("#fadeBack").click(function () {
    $(".oldLecture").fadeTo(1000, 1);
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

//#endregion

////New Animation

$(document).ready(function () {
  $("#animate").click(function () {
    var box = $("#box");
    box.animate(
      {
        left: "600px",
        width: "50px",
        height: "50px",
        backgroundColor: "#8b8b00",
        //bg color is not working
      },
      3000,
      function () {
        //empty
      }
    );
    box.animate(
      {
        fontSize: "45px",
        color: "black",
      },
      2500
    );
  });

  //message box
  


});

function callback2() {
  console.log("callback2 called after animation");
}


 $(function(){
    $("#headerMsg").click(function(){
        $("#contentMsg").toggle("slow");
    })

    $("#closeTag").click(function(){
        $("#message-box").hide("slow");
    })

    $("#showMsgBox").click(function(){
        $("#message-box").show("slow");
    })
 })