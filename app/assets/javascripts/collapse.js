$(document).on('turbolinks:load', function() {
  $("button.btn-primary").click(function() {
    $("#collapseExample").slideToggle("2000");
  })

    $("a.btn").click(function(e) {
      e.preventDefault();
      $("#collapseExample").slideToggle('slow');
    });
  
})