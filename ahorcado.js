//==================VALIDAR LETRAS==========
function sololetras(e) {
	key=e.keyCode || e.which;
 
	teclado=String.fromCharCode(key);

	letras="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
	especiales="8-13-37-38-46-164";
 
	teclado_especial=false;
 
	for(var i in especiales){
		if(key==especiales[i]){
			teclado_especial=true;
			break;
		}
	}
 
	if(letras.indexOf(teclado)==-1 && !teclado_especial){
		alert("Ingrese datos validos!!")
		return false;
	}
 
}


//==============AGREGAR PALABRAS==================
var palabras = ['MANZANA', 'FRESA', 'MELON', 'DIA', 'PERRO', 'SOL', 'MAQUINA', 'TIERRA'];

function agregar() {
  let palbras = document.getElementById('input-nueva-palabra').value.split(" ");
  palabras = palabras.concat(palbras);
  document.getElementById('input-nueva-palabra').value = ""; //limpias el array
}

function mostrar() {
  document.getElementById("demo").innerHTML = palabras.join("<br>");
}



//====================juego=======================

function iniciarJuego() {
	location.reload();
	//document.querySelector('#ahorcado').style.display = 'flex';
	//document.querySelector('#juego').style.display = 'flex';

	//document.querySelector('#ahorcado').style.display = 'flex';
}
String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 


//var palabras = ['casa', 'perro', 'gato', 'elefante'];


const palabra = palabras[Math.floor(Math.random()*palabras.length)];
var palabraConGuiones = palabra.replace(/./g, "? ");
var palabraUsadas = [];



var contadorFallos = 0;
var contadorFallo = contadorFallos;


document.querySelector('#letra').addEventListener('keyup',()=>{
	const letra = document.querySelector('#letra').value;
	
	var haFallado = true;
	
	
	for(const i in palabra){
		if(letra == palabra[i]){
			
			palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);

			haFallado = false;
		} 
 }
	
 	if (haFallado==true) {
		palabraUsadas = palabraUsadas.concat(letra);
		document.getElementById("noU").innerHTML = "Letras Usadas";
		document.getElementById("noUsada").innerHTML = palabraUsadas.join(" ");
		
	 }
	

	if(haFallado){
		 
		
		contadorFallos++;

		if (contadorFallos==1) {
			figura1();	
		}
		if (contadorFallos==2) {
			
			figura2();	
		}
		if (contadorFallos==3) {
			figura3();	
		}
		if (contadorFallos==4) {
			figura4();	
		}
		if (contadorFallos==5) {
			figura5();	
		}
		if (contadorFallos==6) {
			figura6();
		}

		if(contadorFallos == 6){

			
			document.querySelector('#perdedor').style.display = 'flex';
		}
		}else{
			if (palabraConGuiones.indexOf('?')<0) {
				document.querySelector('#ganador').style.display = 'flex';
			}
		}	     	
	
	document.querySelector('#output').innerHTML = palabraConGuiones;
	
	
	document.querySelector('#letra').value = '';
	document.querySelector('#letra').focus();


});
