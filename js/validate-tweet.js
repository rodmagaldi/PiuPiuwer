var botao = document.querySelector(".novo-piu");
var campo = document.querySelector(".piu-bar");
var count = document.querySelector(".text-count");
var usuario = document.querySelector(".usuario").textContent;
var fotoPerfil = "images/profile-picture.jpg";
var errors = [];

campo.addEventListener("input", characterValidation);


//faz a validacao do numero de caracteres para o contador
function characterValidation(){
    
    var txt = campo.value;
    var len = txt.length;

    count.textContent = len;

    if (len > 140) {

        //deixa o texto vermelho
        campo.classList.add("erro-tweet");

        //deixa o contador vermelho
        count.classList.add("text-count-error");
    } else {

        //retorna as cores originais
        campo.classList.remove("erro-tweet");
        count.classList.remove("text-count-error");
    }

    return len;
}

botao.addEventListener("click", function(event){
    event.preventDefault();

    
    //checa se esta muito comprido
    if (characterValidation() > 140) {

        //zera a lista de erros
        while (errors.length != 0) {
            errors.pop();
        }

        //coloca o erro respectivo
        errors.push("Ops! Parece que seu piu está muito comPIUdo!")

        //usa a funcao que exibe os erros
        exibeErros(errors);

    //checa se tem alguma coisa escrita
    } else if (characterValidation() <= 0) {
        while (errors.length != 0) {
            errors.pop();
        }
        errors.push("Ops! Seu piu deve conter algum conteúdo piável!")
        
        exibeErros(errors);

    //publica caso nao haja nenhum erro
    } else {

        //chama a funcao que insere os tweets
        insertTweet(campo.value, usuario, fotoPerfil);
    }

});
