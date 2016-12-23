
function lylita() {
  alert('siin');
  var see = $(this).parent().find('ul').first();
  alert('eesmärk leitud');
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
