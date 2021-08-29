'use strict'

//Llamar 
var formulario = document.querySelector("#formulario");
var box_dashed = document.querySelector(".dashed");
var mostrar = document.querySelector(".mostrar");

//Ocultar información 
mostrar.style.display = "none";

//Mostrar información
formulario.addEventListener('submit',function()
{
    formulario.style.display = "none";
    box_dashed.style.display = "none";
    mostrar.style.display = "block";
});