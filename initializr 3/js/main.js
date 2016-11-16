function highlight (){
  $('h1').text('Hello');
  $('.jumbotron').addClass('highlight');
}
function unhighlight (){
  $('h1').text('Hello, world');
  $(.'jumbotron').removeClass('highlight');
}
