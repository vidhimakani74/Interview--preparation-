var number1=document.querySelector("#num1");
var number2=document.querySelector("#num2");
var output=document.querySelector("#outputbox");
var plus_btn=document.querySelector("#plus");
var minus_btn=document.querySelector("#minus");
var multiply_btn=document.querySelector("#multiply");
var divide_btn=document.querySelector("#divide");

function plus(){
    output.innerText= Number(number1.value)+Number(number2.value);
}

function minus(){
    output.innerText= Number(number1.value)-Number(number2.value);
}

function multiply(){
    output.innerText= Number(number1.value)*Number(number2.value);
}

function divide(){
    output.innerText= Number(number1.value)/Number(number2.value);
}

plus_btn.addEventListener("click",plus);
minus_btn.addEventListener("click",minus);
multiply_btn.addEventListener("click",multiply);
divide_btn.addEventListener("click",divide);

