function highlight (){
  $('h1').text('Hello');
  $('.jumbotron').addClass('highlight');
}
function unhighlight (){
  $('h1').text('Hello, world');
  $(.'jumbotron').removeClass('highlight');
}
function hide(){
  $('.jumbotron').fadeOut();
}
function show(){
  $('.jumbotron').slideDown();
}
