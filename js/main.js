// modal html

let cerrar = document.querySelectorAll(".modal-cerrar")[0];
let abrir = document.querySelectorAll(".cta-html")[0];
let modalC = document.querySelectorAll(".modal-html")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.visibility = "visible";
});

cerrar.addEventListener("click", function(){
    modalC.style.visibility = "hidden";
});

// modal css 

let cerrarcss = document.querySelectorAll(".modal-cerrar-css")[0];
let abrircss = document.querySelectorAll(".cta-css")[0];
let modalCcss = document.querySelectorAll(".modal-css")[0];

abrircss.addEventListener("click", function(e){
    e.preventDefault();
    modalCcss.style.visibility = "visible";
});

cerrarcss.addEventListener("click", function(){
    modalCcss.style.visibility = "hidden";
});

// modal js

let cerrarjs = document.querySelectorAll(".modal-cerrar-js")[0];
let abrirjs = document.querySelectorAll(".cta-js")[0];
let modalCjs = document.querySelectorAll(".modal-js")[0];

abrirjs.addEventListener("click", function(e){
    e.preventDefault();
    modalCjs.style.visibility = "visible";
});

cerrarjs.addEventListener("click", function(){
    modalCjs.style.visibility = "hidden";
});
