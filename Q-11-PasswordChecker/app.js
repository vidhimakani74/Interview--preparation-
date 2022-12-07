var password=document.querySelector("#pass");
var output=document.querySelector("#output");
var check_btn=document.querySelector("#check");
var submit_btn=document.querySelector("#submit");
submit_btn.disabled=true;

function checkPassword(){
    if((password.value.length)<10){
        output.innerText="Invalid Password";
        submit_btn.disabled=true;
        password.style.backgroundColor="red";
    }
    else{
        output.innerText="Valid Password";
        submit_btn.disabled = false;
        password.style.backgroundColor="green";
    }
}

check_btn.addEventListener("click",checkPassword);