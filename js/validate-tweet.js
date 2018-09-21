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

    return len;
}

botao.addEventListener("click", function(event){
    event.preventDefault();
    if (characterValidation() <= 140 && characterValidation() > 0){
        
        // so pra avisar que esta funcionando
        alert("Deu bom!");

        //chamar funcao que coloca o tweet na lista de tweets
        //e colocar aqui
        insertTweet(campo.value);
    }
});
