document.getElementById('addForm').onsubmit = function(event) {
	event.preventDefault();
	window.location = "congrats.html";
}

function dele(element) {
  if (element.value == "Please enter your answer"){
    element.value = "";
  }
}

function openProfile() {
	event.preventDefault();
    window.location = "appProfile.html";
}
