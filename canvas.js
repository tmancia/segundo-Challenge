// ===============seccion de CANVAS================
const canvas = document.querySelector("#ahorcado");
const contexto = canvas.getContext("2d");
contexto.fillStyle ="black";
contexto.lineWidth = 5;



contexto.fillRect(550,310,100,5);
contexto.fillRect(600,10,5,300);
contexto.fillRect(600,10,200,5);
contexto.fillRect(800,10,5,60);


    

function figura1() {
	var radio=1;
	contexto.arc(803,90+radio, 25, 0, 2*Math.PI);
	contexto.fill();
}
//figura1();

function figura2() {
	contexto.fillRect(800,116, 5, 90);
}
//figura2();
function figura3() {
	contexto.beginPath();
    contexto.moveTo(799, 140);
    contexto.lineTo(750,170);
    contexto.stroke();
    contexto.closePath();
	//contexto.fillRect(650,480, 5, 300);
}
//figura3();
function figura4() {
	contexto.beginPath();
    contexto.moveTo(806, 140);
    contexto.lineTo(855, 170);
    contexto.stroke();
    contexto.closePath();
}
//figura4();
function figura5() {
	contexto.beginPath();
    contexto.moveTo(799, 205);
    contexto.lineTo(750, 250);
    contexto.stroke();
    contexto.closePath();
}
//figura5();
function figura6() {
	contexto.beginPath();
    contexto.moveTo(806, 205);
    contexto.lineTo(855, 250);
    contexto.stroke();
    contexto.closePath();
}
//figura6();
