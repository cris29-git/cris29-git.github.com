document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", registre);
window.addEventListener("resize", anchoPagina);


//Declariocion de variables
var contenedor_login_registre = document.querySelector(".contenedor__login-registre");
var formulario_login = document.querySelector(".formulario__login");
var formulario_registre = document.querySelector(".formulario__registre");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_registre = document.querySelector(".caja__trasera-registre");


function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_registre .style.display = "block";
    }else{
        caja_trasera_registre .style.display = "block";
        caja_trasera_registre .style.opacity= "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_registre .style.display ="none";
        contenedor_login_registre .style.left ="0px";
    }
}

anchoPagina();

function iniciarSesion(){

    if(window.innerWidth > 850){
    formulario_registre.style.display = "none";
    contenedor_login_registre. style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_registre .style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
}else{
    formulario_registre.style.display = "none";
    contenedor_login_registre. style.left = "0px";
    formulario_login.style.display = "block";
    caja_trasera_registre .style.display = "block";
    caja_trasera_login.style.display = "none";
}
}


function registre(){

    if(window.innerWidth > 850){
    formulario_registre.style.display = "block";
    contenedor_login_registre. style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_registre .style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
}else{
    formulario_registre.style.display = "block";
    contenedor_login_registre. style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_registre .style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
}
}