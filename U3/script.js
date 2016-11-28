function mostrarPrecio(){
  var productos = generaSurtido();

  document.write("<table><tr>");
  for (var i=0; i < productos.length; i++) {

    document.write("<td width='80px'><h2>" + consultaPrecios(i) + "</h2></td>");
  }

  document.write("</tr></table>");
}
function generaSurtido(){
  var surtido = ["Periódicos", "Revistas", "Gominolas", "Pipas", "Palomitas", "Tabaco", "Lays"];
  return surtido;
}

function consultaPrecios(item){
  var precio = ["1€", "2€", "5cts", "50cts", "1€", "4€", "50cts"];
  return precio[item];
}
 function mostrarSurtido(){
  var productos = generaSurtido();
  /*Generamos el array de fotos con los nombres de los ficheros.
   En este caso podemos usar un array porque los ficheros se llaman como los nombres
 Si no fuera así, tendríamos que cargar uno a uno los nombres.
  Ej: foto[0] = "foto1234.jpg"*/
  var fotos = [];
  foto[0] = "imagen.jpg"
  foto[1] = "imagen.jpg"
  for (var i=0; i < productos.length; i++) {
     fotos[i] = productos[i] + ".jpg";
  }
  //console.log(productos);
  for (var i=0; i < productos.length; i++) {
   document.write("<img src=" + fotos[i] + " width='80px' onclick='mostrarPrecio()'></img>");
  }
 }
