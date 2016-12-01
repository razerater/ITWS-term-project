function duplicate(elem) {
	// elem will be a plus/minus button for requirements/questions
	var newElem = elem.parentNode.cloneNode(true);
	// newElem = clone of the li element containing elem
	elem.parentNode.parentNode.appendChild(newElem);
	// add newElem to the ol/ul element containing elem
}

function delet(elem) {
	/*if (elem.parentElement.previousElementSibling) {
		elem.parentElement.remove();
	}*/
	if (elem.parentNode.parentNode.children.length > 1) {
		elem.parentNode.remove();
	}
}
