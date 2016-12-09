window.onload = function() {
  $("#register-company").hide();
  $("#register-candidate").hide();

  $(".choice-block1").click(function(){
		$(".choice-centered").hide();
    $("#register-login").hide();
    $("#register-candidate").show();
  });

  $(".choice-block2").click(function(){
    $(".choice-centered").hide();
    $("#register-login").hide();
    $("#register-company").show();
  });

  document.getElementById("register-candidateForm").onsubmit = function(event) {
    event.preventDefault();
    var password = document.getElementById("appPassword").value;
    var rePassword = document.getElementById("appRePassword").value;
    if (password !== rePassword) {
      alert("Passwords do not match.");
      return;
    }
    var firstName = document.getElementById("firstName").value;
    var middleName = document.getElementById("middleName").value;
    var lastName = document.getElementById("lastName").value;
    if (middleName) {
      var fullName = firstName + " " + middleName + " " + lastName;
    }
    else {
      var fullName = firstName + " " + lastName;
    }
    var dob = document.getElementById("birthday").value;
    var email = document.getElementById("appEmail").value;
    if (firstName && lastName && dob && email && password) {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
          // push new user to applicants database
          firebase.database().ref("users/applicants").push({
            "firstName": firstName,
            "middleName": middleName,
            "lastName": lastName,
            "fullName": fullName,
            "dob": dob,
            "email": email
          });
          window.location = "appProfile.html";
        }, function(error) {
          alert(error.message);
        });
      }, function(error) {
        alert(error.message);
      });
    }
    else {
      alert("Please enter all the required form elements.");
    }
  }

  document.getElementById("register-companyForm").onsubmit = function(event) {
    event.preventDefault();
    var password = document.getElementById("companyPassword").value;
    var rePassword = document.getElementById("companyRePassword").value;
    if (password !== rePassword) {
      alert("Passwords do not match.");
      return;
    }
    var id = document.getElementById("id").value;
    var name = document.getElementById("companyName").value;
    var email = document.getElementById("companyEmail").value;
    if (id && name && email && password) {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
          // push new user to applicants database
          firebase.database().ref("users/companies").push({
            "id": id,
            "name": name,
            "email": email
          });
          window.location = "companyProfile.html";
        }, function(error) {
          alert(error.message);
        });
      }, function(error) {
        alert(error.message);
      });
    }
  }

  document.getElementById('register-login').onclick = function(event) {
    window.location = "login.html";
  }
}
