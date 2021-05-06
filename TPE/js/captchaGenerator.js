function crearcaptcha() {
    let arreglocaptcha = ["a","b","c","d","e","A","B","C","D","E",1,2,3,4,5];
    let temp = "";
    for (let i = 0; i < 5; i++){
        temp += arreglocaptcha[Math.floor(Math.random() * arreglocaptcha.length)];
    }
    return temp;
};
document.getElementById("captcha").innerHTML=crearcaptcha();
let form = document.getElementById("formulario");
form.addEventListener("submit", function(event)
{
    event.preventDefault();
    let string1 = document.getElementById("captcha").innerHTML;
    let string2 = document.getElementById("captcha-ingresado").value;
    if (string1 == string2) {
        document.getElementById("captcha-correcto").style.display="flex";
    }
    else
    document.getElementById("captcha-erroneo").style.display="flex";
});
document.getElementById("refresh-captcha").addEventListener("click", refresh);
function refresh(){
    document.getElementById("captcha").innerHTML=crearcaptcha();
}