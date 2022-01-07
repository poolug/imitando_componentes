$(document).on('turbolinks:load', function() {
  $("button.btn-primary").click(function() {
    $("#collapseExample").slideToggle("2000");
  })

  $("a.btn").click(function() {
    $(this).removeAttr("href");
    $(this).css({"cursor":"pointer","color":"white"});
    $("#collapseExample").slideToggle("2000");
    });
  
})