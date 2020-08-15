var x=1;
var y=0;
var posEqu1=0;
var posEqu2=0;
var posEqu3=0;
var posEqu4=0;
var textoglobal;
var correcto;
var incorrecto;

function rollDice(){
    var die1 = document.getElementById("die1");
    var d1 = Math.floor(Math.random() * 6) + 1;
    die1.src = "imgs/Alea_"+d1+".png";
    //Imprime dado con pregunta
    var elemento = document.getElementById('pregunta');
    var posicion = document.getElementById('posicion');
    if (posicion.innerHTML == "equipo1") {
      elemento.innerHTML = textoglobal[posEqu1];
      posEqu1= posEqu1+d1;
      elemento.innerHTML= elemento.innerHTML+"Equipo 1, Posicion:"+posEqu1;
      azul='azul';
      navegacion(azul,posEqu1)
    }else if (posicion.innerHTML == "equipo2"){
      elemento.innerHTML = textoglobal[posEqu2];
      posEqu2= posEqu2+d1;
      elemento.innerHTML=elemento.innerHTML+"Equipo 2, Posicion:"+posEqu2;
      rojo='rojo';
      navegacion(rojo,posEqu2)
    }else if (posicion.innerHTML == "equipo3"){
      elemento.innerHTML = textoglobal[posEqu3];
      posEqu3= posEqu3+d1;
      elemento.innerHTML=elemento.innerHTML+"Equipo 3, Posicion:"+posEqu3;
      verde='verde';
      navegacion(verde,posEqu3)
    }else {
      elemento.innerHTML = textoglobal[posEqu4];
      posEqu4= posEqu4+d1;
      elemento.innerHTML=elemento.innerHTML+"Equipo 4, Posicion:"+posEqu4;
      amarillo='amarillo';
      navegacion(amarillo,posEqu4)
    }
    if (posEqu1 > 99 || posEqu2 > 99 || posEqu3 > 99 || posEqu4 > 99){
    	alert("EL juego ha terminado, gano el equipo:");
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
    posicion.innerHTML=document.fequipos.equipo[i].value;
} 

function navegacion(equipo,posicion){
  posicion=posicion-1
  var marginLeft=12;
  var marginTop=-52;
  var lado=52.5;
  var derecha=1;
  var izquierda=0;
  var cambio=0
  // De lado a lado
  if ((posicion>0 && posicion<=10)||(posicion>20 && posicion<=30)||(posicion>40 && posicion<=50)||(posicion>60 && posicion<=70)||(posicion>80 && posicion<=90)){
    if(posicion<=10){
      cambio2=parseInt(String(posicion).substring(0, 1));
      document.getElementById(equipo).style.marginLeft= String(lado*cambio2+marginLeft)+"px";
    }else{
      cambio2=parseInt(String(posicion).substring(1, 2));
      if(cambio2==0){
        document.getElementById(equipo).style.marginLeft= String(lado*9+marginLeft)+"px";
      }else{
        document.getElementById(equipo).style.marginLeft= String(lado*cambio2+marginLeft)+"px";
      }
    }
  }else {
    cambio2=9-(parseInt(String(posicion).substring(1, 2)));
    if(cambio2==9){
      document.getElementById(equipo).style.marginLeft= String(lado*0+marginLeft)+"px";
    }else{
      document.getElementById(equipo).style.marginLeft= String(lado*cambio2+marginLeft)+"px";
    }
  }
  //Para subir o bajar 
  if (posicion<=10){
    cambio=0;
    document.getElementById(equipo).style.marginTop= String(marginTop-(lado*cambio))+"px";
  }else{
    cambio=parseInt(String(posicion).substring(0, 1));
    document.getElementById(equipo).style.marginTop= String(marginTop-(lado*cambio))+"px";
  }
}
function esCorrecto(){
  correcto=1;
  incorrecto=0;
}
function esIncorrecto(){
  correcto=0;
  incorrecto=1;
}