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

document.getElementById('register-candidateForm').onsubmit = function(event) {
	event.preventDefault();
	window.location = "appProfile.html";
}

document.getElementById('register-companyForm').onsubmit = function(event) {
	event.preventDefault();
	window.location = "companyProfile.html";
}

document.getElementById('register-login').onclick = function(event) {
  window.location = "login.html";
}

function applyID(){
  event.preventDefault();
  window.location = "applyID.html";
}