
const ikooniKylg = 56;
const ruuduKylg = 80;
const R = 3; // Ridade arv
const V = 4; // Veergude arv
const tx = 20;
const ty = 175;

// Eemaldab ikooni(d) ja peidab teksti
function eemalda() {
  $('#Isik').empty();
  $('.s').addClass('varjus');
}

// Loo ikoon ritta r, veergu v, ikoon k, värviga c
function looIkoon(r, v, k, c) {
  var sym = $('<i class="material-icons">' + k + '</i>')
    .addClass('ikoon');
  var isik = $('<div></div>')
    .addClass('isikuYmbris')
    .css('left', tx + ruuduKylg * (v + 0.5) - ikooniKylg / 2)
    .css('top', ty + ruuduKylg * (r + 0.5) - ikooniKylg / 2)
    .css('color', c)
    .append(sym);
  $('#Isik').append(isik);
}

// Tagastab C11 kujust rea, numbrina
function r(t) {
  return parseInt(t.substring(1, 2));
}

// Tagastab C11 kujust veeru, numbrina
function v(t) {
  return parseInt(t.substring(2));
}

<!-- Valitud ruudu saatmine Google töölehele -->
function saada(ruut) {
  $.post('https://script.google.com/macros/s/AKfycbxAGis8ZTtR2H0cMm8nbndTRnJgyK9EGCptrlH8L3RvIS6qn5E/exec',
    { Ruut: ruut },
    function() {
      // alert('Saadetud!');
    }
  );
}  

function valmistaEtte() {

  $('.k').click(function(){
    eemalda();
    // saada(this.id);
    looIkoon(r(this.id), v(this.id), 'person_pin', 'DimGray');
    // Peida senised soovitused
    $('.s').addClass('varjus');
    // Kuva soovitused
    $('.T' + parseInt(this.id.substring(1))).removeClass('varjus');
    switch (this.id) {
      case 'C11': 
        looIkoon(1, 3, 'help_outline', 'Tomato');
        break
      case 'C12':
        looIkoon(1, 3, 'help_outline', 'Tomato');
        break
      case 'C13':
        looIkoon(3, 3, 'help_outline', 'Tomato');
        break
      case 'C14':
        looIkoon(3, 4, 'help_outline', 'Tomato');
        break

      case 'C21': 
        looIkoon(1, 3, 'help_outline', 'Tomato');
        looIkoon(2, 3, 'help_outline', 'Tomato');
        break
      case 'C22':
        looIkoon(1, 3, 'help_outline', 'Tomato');
        break
      case 'C23':
        looIkoon(3, 3, 'help_outline', 'Tomato');
        break
      case 'C24':
        looIkoon(3, 4, 'help_outline', 'Tomato');
        break
      case 'C31': 
        looIkoon(1, 1, 'help_outline', 'Tomato');
        looIkoon(3, 3, 'help_outline', 'Tomato');
        looIkoon(3, 4, 'help_outline', 'Tomato');
        break
      case 'C32':
        looIkoon(3, 3, 'help_outline', 'Tomato');
        break
      case 'C33':
      case 'C34':      
    }
  });

  // Arvamuse käsitleja
  $('#Saada').click(function() {
    $('#tanuteade').removeClass('varjus');
    $.post('https://script.google.com/macros/s/AKfycbxAGis8ZTtR2H0cMm8nbndTRnJgyK9EGCptrlH8L3RvIS6qn5E/exec',
      { Arvamus: $('#Arvamus').val() },
      function() {
        // alert('Saadetud!');
      }
    );    
  });

}

