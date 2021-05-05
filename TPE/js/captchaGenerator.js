function crearcaptcha() {
    let arreglocaptcha = ["a","b","c","d","e","A","B","C","D","E",1,2,3,4,5];
    let temp = "";
    for (let i = 0; i < 5; i++){
        temp += arreglocaptcha[Math.floor(Math.random() * arreglocaptcha.length)];
    }
    return temp;
}
document.getElementById("captcha").innerHTML=crearcaptcha();