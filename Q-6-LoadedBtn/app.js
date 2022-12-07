var loadingText=document.querySelector("#loading");
var loaded_Btn=document.querySelector("#loaded");

function load(){
    loadingText.innerText='';
}


loaded_Btn.addEventListener('click', load)