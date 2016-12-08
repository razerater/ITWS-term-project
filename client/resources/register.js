$(document).ready(function() {
  
  // example event handler:
  $("#register-company").hide();

  $("#register-candidate").hide();

  $(".choice-block1").click(function(){
  		$(".choice-centered").hide();
      $("#register-login").hide();
  		$("#register-candidate").show()
  });

  $(".choice-block2").click(function(){
  		$(".choice-centered").hide();
      $("#register-login").hide();
  		$("#register-company").show()
  });
    
});

document.getElementById('register-login').onclick = function(event) {
  window.location = "login.html";
}

function applyID(){
  event.preventDefault();
  window.location = "applyID.html";
}

function validate1(formObj) {
  var message = '';
  var f = true;
  if (formObj.firstName.value == "") {
    message += "You must enter a first name\n";
    formObj.firstName.focus();
    f = false;
  }

  if (formObj.lastName.value == "") {
    message += "You must enter a last name\n";
    if (f == true) {
      formObj.lastName.focus();
      f = false;
    }
  }

  if (formObj.birthday.value == "") {
    message += "You must enter a birthday\n";
    if (f == true) {
      formObj.birthday.focus();
      f = false;
    }
  }

  if (formObj.email.value == "") {
    message += "You must enter a email\n";
    if (f == true) {
      formObj.email.focus();
      f = false;
    }
  }

  if (formObj.password.value == "") {
    message += "You must enter a password\n";
    if (f == true) {
      formObj.password.focus();
      f = false;
    }
  }

  if (formObj.rePassword.value == "") {
    message += "You must enter the password again\n";
    if (f == true) {
      formObj.rePassword.focus();
      f = false;
    }
  }

  if (formObj.birthday.value != "" && formObj.rePassword.value != "" && formObj.password.value != "" && formObj.email.value != "" && formObj.lastName.value != "" && formObj.firstName.value != ""){
    message += "Your form is successfully submitted"
  }

  alert(message)
}

function validate2(formObj) {
  var message = '';
  var f = true;
  if (formObj.id.value == "") {
    message += "You must enter an ID\n";
    formObj.id.focus();
    f = false;
  }

  if (formObj.companyName.value == "") {
    message += "You must enter a company name\n";
    if (f == true) {
      formObj.companyName.focus();
      f = false;
    }
  }

  if (formObj.email.value == "") {
    message += "You must enter a email\n";
    if (f == true) {
      formObj.email.focus();
      f = false;
    }
  }

  if (formObj.password.value == "") {
    message += "You must enter a password\n";
    if (f == true) {
      formObj.password.focus();
      f = false;
    }
  }

  if (formObj.rePassword.value == "") {
    message += "You must enter the password again\n";
    if (f == true) {
      formObj.rePassword.focus();
      f = false;
    }
  }

  if (formObj.rePassword.value != "" && formObj.password.value != "" && formObj.email.value != "" && formObj.companyName.value != "" && formObj.id.value != ""){
    message += "Your form is successfully submitted"
  }

  alert(message)
}
