var x=1;
var y=0;
var pos=0
var textoglobal;

function rollDice(){
    var die1 = document.getElementById("die1");
    var d1 = Math.floor(Math.random() * 6) + 1;
    pos =d1 + y;
    die1.src = "imgs/Alea_"+d1+".png";
    //Imprime dado con pregunta
    var elemento = document.getElementById('pregunta');
    elemento.innerHTML = textoglobal[pos];
    x = x+1;
    y = pos;
    if (pos > 99){
    	alert("EL juego ha terminado");
    	y = 0;
    }
}
var openFile = function(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
      var text = reader.result.split('\n');
      textoglobal=text
      pregunta.style.cssText= 'font-size: 30px; cursor: pointer; text-align:center;';
      var elemento = document.getElementById('pregunta');
      elemento.innerHTML = text[pos];
      console.log(reader.result.substring(0, 200));
    };
    reader.readAsText(input.files[0]);
  };

  function cambiaColor(){ 
    var posicion = document.getElementById('posicion');
    var i 
    for (i=0;i<document.fequipos.equipo.length;i++){ 
       if (document.fequipos.equipo[i].checked) 
          break; 
    } 
    posicion.innerHTML=document.fequipos.equipo[i].value

} 