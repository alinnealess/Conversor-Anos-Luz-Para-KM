function Converter(){
  var valorElemento = document.getElementById("valor")
  var valor = valorElemento.value;
  var distAnosLuz = parseFloat(valor);
  
  var distKm = (distAnosLuz * 9460800000000);

  console.log(distKm);
  
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = distAnosLuz  +" anos luz equivale aproximadamente " + distKm+"Km";
  elementoValorConvertido.innerHTML = valorConvertido;
}