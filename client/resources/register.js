$(document).ready(function() {
  
  // example event handler:
  $("#register-company").hide();

  $("#register-candidate").hide();

  $(".choice-block1").click(function(){
  		$(".choice-centered").hide();
  		$("#register-candidate").show()
  });

  $(".choice-block2").click(function(){
  		$(".choice-centered").hide();
  		$("#register-company").show()
  });
    
});

document.getElementById('register-candidateForm').onsubmit = function(event) {
	event.preventDefault();
	window.location = "appProfile.html";
}

document.getElementById('register-applyID').onclick = function(event) {
	window.location = "applyID.html";
}

document.getElementById('register-commpanyForm').onsubmit = function(event) {
	event.preventDefault();
	window.location = "companyProfile.html";
}

