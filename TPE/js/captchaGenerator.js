function crearcaptcha() {
    let arreglocaptcha = ["a", "b", "c", "d", "e", "A", "B", "C", "D", "E", 1, 2, 3, 4, 5];
    let temp = "";
    for (let i = 0; i < 5; i++) {
        temp += arreglocaptcha[Math.floor(Math.random() * arreglocaptcha.length)];
    }
    return temp;
};
document.getElementById("captcha").innerHTML = crearcaptcha();
document.getElementById("btn-enviarform").addEventListener("click", function (event) {
    event.preventDefault();
    let string1 = document.getElementById("captcha").innerHTML;
    let string2 = document.getElementById("captcha-ingresado").value;
    if (string1 == string2) {
        document.querySelector(".msj-enviado").classList.remove("ocultar");
        if (!(document.querySelector(".msj-error").classList.contains("ocultar"))) {
            document.querySelector(".msj-error").classList.add("ocultar");//Este if verifica si msj-error tiene la clase ocultar, si no la tiene se la agrega por si se estaba mostrando el mensaje de error previamente
        }
    }
    else {
        document.querySelector(".msj-error").classList.remove("ocultar");
        if (!(document.querySelector(".msj-enviado").classList.contains("ocultar"))) {
            document.querySelector(".msj-enviado").classList.add("ocultar");//Lo mismo que el if que verifica msj-error solo que este se aplica en mensaje-enviado
        }
    }
});
document.getElementById("refresh-captcha").addEventListener("click", refresh);
function refresh(event) {
    event.preventDefault();
    document.getElementById("captcha").innerHTML = crearcaptcha();
    if ((!(document.querySelector(".msj-error").classList.contains("ocultar"))) || (!(document.querySelector(".msj-enviado").classList.contains("ocultar")))){//este if sirve para que se borre el mensaje de error o enviado con el boton refresh
        document.querySelector(".msj-error").classList.add("ocultar");
        document.querySelector(".msj-enviado").classList.add("ocultar");
    }
    document.getElementById("captcha-ingresado").value = "";
}


