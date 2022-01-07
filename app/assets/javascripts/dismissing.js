$(document).on('turbolinks:load', function() {
  $("span").click(function() {
    $(".alert-dismissible").fadeToggle("slow");
  })
});