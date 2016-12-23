
function lylita() {
  alert('parent id:' + $(this).parent().attr('id'));
  var see = $(this).parent().find('ul').first();
  alert('eesmärk leitud');
  if (see.hasClass('closed')) {
    alert('omab klassi closed');
  }
  else {
    alert('ei oma klassi closed');
  }
  alert(JSON.stringify(see));
  alert('nägid?');
  alert($(this).css('color'));
  $(this).css('backgroundColor', 'Blue');
  $(this).parent().addClass('closed');
  return
  var alam = $(this).parent().find('ul').first();
  alert('2');
  if (alam.hasClass('closed')) {
    alam.removeClass('closed')
  }
  else {
    alam.addClass('closed')
  }
}
