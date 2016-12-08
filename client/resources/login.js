window.onload = function() {
  document.getElementById("addFormApp").onsubmit = function(event) {
    event.preventDefault();
    var email = document.getElementById("app-email").value;
    var password = document.getElementById("app-password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      window.location = "appProfile.html";
    }, function(error) {
      alert(error.message);
    });
  }

  document.getElementById("addFormCom").onsubmit = function(event) {
  	event.preventDefault();
    var email = document.getElementById("comp-email").value;
    var password = document.getElementById("comp-password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      window.location = "companyProfile.html";
    }, function(error) {
      alert(error.message);
    });
  }

  for (elem of document.getElementsByClassName('login-goBack')) {
    elem.onclick = function() {
      window.location = "index.html";
    }
  }

  $(".login-loginInfo-C").hide();
  $(".login-type-co1").click(function() {
    $(".login-loginInfo").hide();
    $(".login-loginInfo-C").show();
  });
  $(".login-type-ca2").click(function() {
    $(".login-loginInfo-C").hide();
    $(".login-loginInfo").show();
  });
}
