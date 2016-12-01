jQuery(document).ready(function($) {
    $('#edit').click(function() {
      window.location='editAppProfile.html'; 
    }); 
    
    $('#add-pos').click(function() {
      var url = $(this).attr('href');
      window.open(url, '_blank')
    }); 
    
});