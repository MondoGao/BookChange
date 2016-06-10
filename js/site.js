$(document).ready(function() {
  var $headerUser = $("div.site-header .header-user").children('a');
  var $loginCover = $("div.login-cover");
  var $regCover = $("div.reg-cover");
  $($headerUser[0]).click(function(event) {
    event.preventDefault();
    $loginCover.fadeIn('400');
  });
  $($headerUser[1]).click(function(event) {
    event.preventDefault();
    $regCover.fadeIn('400');
  });
  $regCover.children().click(function(event) {
     event.stopPropagation();
  });
  $loginCover.children().click(function(event) {
     event.stopPropagation();
  });
  $regCover.click(function(){
    $regCover.fadeOut('400');
  });
  $loginCover.click(function(){
    $loginCover.fadeOut('400');
  });
  $loginCover.find('a.reg').click(function(event) {
    event.preventDefault();
    $loginCover.fadeOut('400');
    $regCover.fadeIn('400');
  });
  $regCover.find('a.log').click(function(event) {
    event.preventDefault();
    $regCover.fadeOut('400');
    $loginCover.fadeIn('400');
  });

  $("#reward-img").bind('change', function(event) {
    $(this).parent().children('label').text($(this).val());
  });
});
