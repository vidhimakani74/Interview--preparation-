var string=document.querySelector("#str");
var output=document.querySelector("#show");
var plus_btn=document.querySelector("#plus");
var minus_btn=document.querySelector("#minus");

let pixels=32
function plus(){
    pixels+=2
    output.style.fontSize=`${pixels}px`;
    output.innerText=string.value
}
function minus(){
    pixels-=2
    output.style.fontSize=`${pixels}px`;
    output.innerText=string.value
}

plus_btn.addEventListener("click",plus);
minus_btn.addEventListener("click",minus);