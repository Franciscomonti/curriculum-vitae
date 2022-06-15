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

// modal sass

let cerrarsass = document.querySelectorAll(".modal-cerrar-sass")[0];
let abrirsass = document.querySelectorAll(".cta-sass")[0];
let modalCsass = document.querySelectorAll(".modal-sass")[0];

abrirsass.addEventListener("click", function(e){
    e.preventDefault();
    modalCsass.style.visibility = "visible";
});

cerrarsass.addEventListener("click", function(){
    modalCsass.style.visibility = "hidden";
});

// modal git

let cerrargit = document.querySelectorAll(".modal-cerrar-git")[0];
let abrirgit = document.querySelectorAll(".cta-git")[0];
let modalCgit = document.querySelectorAll(".modal-git")[0];

abrirgit.addEventListener("click", function(e){
    e.preventDefault();
    modalCgit.style.visibility = "visible";
});

cerrargit.addEventListener("click", function(){
    modalCgit.style.visibility = "hidden";
});

// modal Figma

let cerrarfigma = document.querySelectorAll(".modal-cerrar-figma")[0];
let abrirfigma = document.querySelectorAll(".cta-figma")[0];
let modalCfigma = document.querySelectorAll(".modal-figma")[0];

abrirfigma.addEventListener("click", function(e){
    e.preventDefault();
    modalCfigma.style.visibility = "visible";
});

cerrarfigma.addEventListener("click", function(){
    modalCfigma.style.visibility = "hidden";
});

