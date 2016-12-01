document.getElementById('addForm').onsubmit = function(event) {
	event.preventDefault();
	window.location = "congradulations.html";
}

function dele(element) {
  if (element.value == "Please enter your answer"){
    element.value = "";
  }
}
