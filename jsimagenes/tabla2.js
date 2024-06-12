$(document).ready(function(){

  // Función para agregar imagen al inicio de tabla2.html
  function agregarImagen(imagenNumero, nombreImagen) {
      var imagenHTML = "<img src='imagenes4/" + imagenNumero + ".jpg' alt='" + nombreImagen + "'>";
      return imagenHTML;
  }

  // Iterar sobre cada fila de la tabla y agregar la imagen correspondiente al final de cada fila
  $('#tabla1 tr').each(function(){
      var imagenNumero = $(this).find("td:eq(0)").text();
      var nombreImagen = "Imagen " + $(this).find("td:eq(0)").text();
      var imagenHTML = agregarImagen(imagenNumero, nombreImagen);
      $(this).find("td:last").html(imagenHTML);
  });

  // Evento click para los botones de enviar
  $('.envio').on('click', function() {
      var hermano = $(this).parent();
      var filaHTML = "<tr>\
                          <td>"+hermano.siblings("td:eq(0)").text()+"</td>\
                          <td>"+hermano.siblings("td:eq(1)").text()+"</td>\
                          <td>"+hermano.siblings("td:eq(2)").text()+"</td>\
                          <td></td>\
                          <td></td>\
                      </tr>";

      // Obtener el número de la imagen correspondiente
      var imagenNumero = hermano.siblings("td:eq(0)").text();
      var nombreImagen = "Imagen " + imagenNumero;
      var imagenHTML = agregarImagen(imagenNumero, nombreImagen);

      // Agregar la imagen al final de la fila
      hermano.parent().find("td:last").html(imagenHTML);

      // Abrir una nueva ventana
      var nuevaVentana = window.open("", "_blank");

      // Crear un documento HTML en la nueva ventana
      var nuevoDocumento = nuevaVentana.document; 
      nuevoDocumento.write("<!DOCTYPE html><html><head><title>Fila de Tabla</title><style>table {border-collapse: collapse;width: 100%;}th, td {border: 1px solid black;padding: 8px;text-align: left;}th {background-color: #f2f2f2;}</style></head><body><table id='tabla21'>" + filaHTML + "</table>" + imagenHTML + "</body></html>");
  });
});