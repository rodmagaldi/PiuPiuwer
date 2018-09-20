var botao = document.querySelector(".novo-piu");
var campo = document.querySelector(".piu-bar");
var count = document.querySelector(".text-count");

campo.addEventListener("input", characterValidation);

function characterValidation(){
    
    var txt = campo.value;
    var len = txt.length;

    count.textContent = len;

    if (len > 140) {
        campo.classList.add("erro-tweet");
        count.classList.add("text-count-error");
    } else {
        campo.classList.remove("erro-tweet");
        count.classList.remove("text-count-error");
    }
}