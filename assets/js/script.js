$(document).ready(function(){
    buildMap();
  });
  
  var sw = document.body.clientWidth,
      bp = 550,
      $map = $('.map');
  var static = "https://maps.google.com/maps/api/staticmap?center=40.440625,-79.995886&zoom=13&markers=40.440625,-79.995886&size=640x320&sensor=true";
  var embed = '<iframe width="980" height="650" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d487.8550600130299!2d-77.114154!3d-11.9855376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cdfc7b2beb91%3A0x2420ce43de309a9b!2sGeoralab!5e0!3m2!1ses!2spe!4v1723508861859!5m2!1ses!2spe"></iframe>';
  
  function buildMap() {
    var sw = $(window).width(); // obtener el ancho de pantalla actual
    var bp = 768; // punto de ruptura para pantallas pequeñas (ajusta según sea necesario)
  
    if (sw > bp) { // pantallas grandes
      if ($('.map-container').length < 1) { // si no existe un mapa
        buildEmbed(); // crear un mapa embebido
      }
    } else { // pantallas pequeñas
      if ($('.static-img').length < 1) { // si no existe una imagen estática
        buildStatic(); // crear una imagen estática
      }
      // agregar una condición adicional para pantallas muy pequeñas (por ejemplo, móviles)
      if (sw < 480) { // ajusta el valor según sea necesario
        // agregar un comportamiento específico para pantallas muy pequeñas
        buildMobileMap(); // crear un mapa para móviles
      }
    }
  };
  
  function buildEmbed() { //Build iframe view
      $('<div class="map-container"/>').html(embed).prependTo($map);
  };
    
  function buildStatic() { //Build static map
     var mapLink = $('.map-link').attr('href'),
         $img = $('<img class="static-img" />').attr('src',static);
     $('<a/>').attr('href',mapLink).html($img).prependTo($map); 
  }
  
  $(window).resize(function() {
    sw = document.body.clientWidth;
    buildMap();
    google.maps.event.trigger(map, "resize");
  });


