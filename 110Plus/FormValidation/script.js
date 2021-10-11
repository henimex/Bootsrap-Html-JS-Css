$(function () {
  function isMail(email) {
    var pattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
    return pattern.test(email);
  }
  $("#btnSave").click(function () {
    var errorMessage = "";
    $("#error").html("");

    if ($("#email").val() == "") {
      errorMessage += "<p>Email Alanı Zorunlu Alan</p>";
    }

    if ($.isNumeric($("#phone").val()) == "") {
      errorMessage += "<p>Telefon Alanı Zorunludur ve Sadece Numara Giriniz</p>";
    }

    if (isMail($("#email").val()) == false) {
      errorMessage += "<p>Email Alanı Uygun Formatta Degil</p>";
    }

    if ($("#password").val() == "") {
      errorMessage += "<p>Şifre Alanı Zorunlu Alan</p>";
    }

    if ($("#password").val() !== $("#rePassword").val()) {
      errorMessage += "<p>Paralolar Eşleşmiyor</p>";
    }

    if (errorMessage !== null) {
      $("#error").html(errorMessage);
    }
  });
});
