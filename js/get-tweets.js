var xhr = new XMLHttpRequest();

xhr.open("GET", "https://cors.io/?http://www.mocky.io/v2/5b9dc3933200001100db93e7");

xhr.addEventListener("load", function(){

    if (xhr.status == 200){
        var resposta = xhr.responseText;
        var tweets = JSON.parse(resposta);
        console.log(tweets);
        tweets.forEach(function(tweet){
            console.log(tweet);
        })
    } else {
        console.log(xhr.status)
    }
    
})

xhr.send();