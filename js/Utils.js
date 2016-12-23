function init() {
  $('.lyliti').click(function() {
    var i = $(this).attr('id');
    alert('id=' + i);
  });
}

function lylita() {
  alert('id=' + this.id);
  $('#alamlist' + this.id).removeClass('closed');
  alert('klass closed eemaldatud');
}
