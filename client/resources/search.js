jQuery(document).ready(function($) {
    $(".clickableRow").click(function() {
        window.document.location = $(this).data("href");
    });

    $(".clickableRow").hover(
      function(){
        $(this).css('cursor','pointer');
        $("td").css('text-decoration', 'underline');
        $("td").css('color', '#2196F3');
      }, function(){
        $("td").css('text-decoration', 'none');
        $("td").css('color', 'black');
      });
    
    
    $('#applyButton').click(function() {
      window.location='supplemental.html'; 
    }); 
    
});
