var string = document.querySelector("#str");
var output=document.querySelector("#show");
var red_btn=document.querySelector("#red");
var green_btn=document.querySelector("#green");
var blue_btn=document.querySelector("#blue");

function red(){
    output.style.color="red";
    output.innerText=string.value;
}
function green(){
    output.style.color="green";
    output.innerText=string.value;
}
function blue(){
    output.style.color="blue";
    output.innerText=string.value;
}

red_btn.addEventListener("click",red);
green_btn.addEventListener("click",green);
blue_btn.addEventListener("click",blue);