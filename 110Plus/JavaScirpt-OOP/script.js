//Error Handling
$("#titleLes").text("Error Handling");

var user = { firstName: "John" };

try {
  console.log(dhsaj());
  console.log(user.email);
  if (!user.email) {
    throw new SyntaxError("No Email Ref in Object");
  }
} catch (error) {
  console.log(error);
  if (error instanceof ReferenceError) {
    console.log("Referans Hatası Alındı", error.message);
  } else if (error instanceof SyntaxError) {
    console.log("Syntax Error", error.message);
  }
  console.log(error);
}

//Demo
document.getElementById("myBtn").addEventListener("click", function (e) {
  var name = document.getElementById("name");
  var age = document.getElementById("age");
  var errors = document.getElementById("errors");
  errors.innerHTML = "";

  try {
    if (name.value.length === 0) {
      throw new Error("Name is required");
    }
    if (name.value.length > 20) {
      throw new Error("Name is too long");
    }

    if (age.value.length === 0) {
      throw new Error("Age is required");
    }
    if (age.value > 30) {
      throw new Error("You are too old for this. Sorry in an another world");
    }

    if (isNaN(age.value)) {
      throw new Error("Age is not numeric");
    }
    console.log("Submitted");
  } catch (error) {
    errors.innerHTML = error;
  } finally {
    name.value = "";
    age.value = "";
  }

  e.preventDefault();
});
