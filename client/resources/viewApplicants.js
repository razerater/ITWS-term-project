function display() {
		// for reference check out http://api.jquery.com/jQuery.each/			
  	var txt="<ol>";
	  $.each(bwEvents.bwEventList.events, function() {
	    txt += '<li>' + this.summary + ', ' + this.start.longdate +'</li>';
	  });
	  txt += '</ol>';
		 		
	  outputBox = document.getElementById("output");
      outputBox.innerHTML = txt;
	}