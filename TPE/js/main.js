document.getElementById("work1").addEventListener("mouseover",()=>{
    let img =document.getElementById("work1");
    img.src = "assets/pastworks1hov.PNG";
});

document.getElementById("work1").addEventListener("mouseout",()=>{
    let img = document.getElementById("work1");
    img.src = "assets/pastworks1.PNG";
});

document.getElementById("work2").addEventListener("mouseover", cambiarPastWork2);
function cambiarPastWork2 (){
    let img = document.getElementById("work2");
    img.src = "assets/pastworks2hov.PNG";
}
document.getElementById("work2").addEventListener("mouseout", original2);
function original2 (){
    let img = document.getElementById("work2");
    img.src = "assets/pastworks2.PNG";
}

document.getElementById("work3").addEventListener("mouseover", ()=>
    document.getElementById("work3").src="assets/pastworks3hov.PNG"
)
document.getElementById("work3").addEventListener("mouseout", ()=>
    document.getElementById("work3").src="assets/pastworks3.PNG"
)

document.getElementById("work4").addEventListener("mouseover", cambiarPastWork4);
function cambiarPastWork4 (){
    let img = document.getElementById("work4");
    img.src = "assets/pastworks4hov.PNG";
}
document.getElementById("work4").addEventListener("mouseout", original4);
function original4 (){
    let img = document.getElementById("work4");
    img.src = "assets/pastworks4.PNG";
}


