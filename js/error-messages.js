function exibeErros(listaErros){
    listaErros.forEach(function(erro) {
        var erroMostrado = document.querySelector("#mensagem-erro");
        erroMostrado.textContent = erro;
    });
}