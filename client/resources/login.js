document.getElementById('addFormApp').onsubmit = function(event) {
	event.preventDefault();
	window.location = "appProfile.html";
}
document.getElementById('addFormCom').onsubmit = function(event) {
	event.preventDefault();
	window.location = "companyProfile.html";
}
Array.prototype.slice.call(document.getElementsByClassName('login-goBack')).forEach(function(elem) {
	elem.onclick = function() {
		window.location = "index.html";
	}
});

$(document).ready(function() {
  
  // example event handler:
  $(".login-loginInfo-C").hide();

  $(".login-type-co1").click(function(){
  		$(".login-loginInfo").hide();
  		$(".login-loginInfo-C").show()
  });

  $(".login-type-ca2").click(function(){
  		$(".login-loginInfo-C").hide();
  		$(".login-loginInfo").show()
  });
    
});