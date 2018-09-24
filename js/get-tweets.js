piusPiados = document.querySelectorAll(".piu-piu");

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://cors.io/?http://www.mocky.io/v2/5b9dc3933200001100db93e7");

xhr.addEventListener("load", function(){

    if (xhr.status == 200){
        var resposta = xhr.responseText;
        var tweets = JSON.parse(resposta);
        tweets.forEach(function(tweet){
            console.log(tweet);
            fotoPerfilUsuario = tweet.imgUrl;
            mensagemUsuario = tweet.message;
            usernameUsuario = tweet.user;
            insertTweet(mensagemUsuario, usernameUsuario, fotoPerfilUsuario);
            console.log(piusPiados)
        })
    } else {
        console.log(xhr.status)
    }
    
})

xhr.send();