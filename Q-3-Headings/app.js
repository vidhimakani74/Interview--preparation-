var string=document.querySelector("#str");
var output=document.querySelector("#show");
var h1_btn=document.querySelector("#h1");
var h2_btn=document.querySelector("#h2");
var h3_btn=document.querySelector("#h3");

let h1Size=32
let h2Size=24
let h3Size=18.72

function h1(){
    output.style.fontSize=`${h1Size}px`;
    output.innerText=string.value
}
function h2(){
    output.style.fontSize=`${h2Size}px`;
    output.innerText=string.value
}
function h3(){
    output.style.fontSize=`${h3Size}px`;
    output.innerText=string.value
}

h1_btn.addEventListener("click",h1);
h2_btn.addEventListener("click",h2);
h3_btn.addEventListener("click",h3);