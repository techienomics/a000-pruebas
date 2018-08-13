// JavaScript Document

/* Comentario de Bloque
*/

function ejecuta(){
	var yy=document.getElementsByTagName("p")
	for (var i=0; i<yy.length; i++){
		yy[i].onclick=saludo;
}
}

function saludo() {
	alert("que hay de nuevo viejo");
}

window.onload=ejecuta;

//	document.getElementsByTagName("p")[0].onclick=saludo;

//	document.getElementsById("importante").onclick=saludo;

/*
var z=document.getElementsByClassName("importante");
for (var i=0; i<z.length; i++){
	z[i].onclick=saludo;
}
*/

// document.querySelector(".importante").onclick=saludo;
// document.querySelector("#principal p:last-child").onclick=saludo;
// var zz= document.querySelectorAll("#principal p")[0].onclick=saludo;

/*
var zz=document.querySelectorAll("#principal p");
for (var i=0; i<zz.length; i++){
	zz[i].onclick=saludo;
}
*/

//	document.getSelectorAll("p, span").onclick=saludo;