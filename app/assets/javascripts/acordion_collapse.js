$(document).on('turbolinks:load', function() {
  $("#headingOne").click(function(e) {
    e.preventDefault();
    $("#collapseOne").slideToggle();
    $("#collapseTwo").hide();
    $("#collapseThree").hide();
  })

  $("#headingTwo").click(function(e) {
    e.preventDefault();
    $("#collapseOne").hide();
    $("#collapseTwo").slideToggle();
    $("#collapseThree").hide();
  })

  $("#headingThree").click(function(e) {
    e.preventDefault();
    $("#collapseOne").hide();
    $("#collapseTwo").hide();
    $("#collapseThree").slideToggle();
  })
})