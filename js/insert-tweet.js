var campo = document.querySelector(".piu-bar");
var piuBox = document.querySelector(".piu-box");
var piusBox = document.querySelector(".pius");

function insertTweet(tweet, usuario, foto){
    
    var novoTweetDiv = document.createElement("div");
    novoTweetDiv.classList.add("piu-piu");
    piuBox.appendChild(novoTweetDiv);
    piusBox.insertAdjacentElement('afterend', novoTweetDiv);

    var imagemDiv = document.createElement("div");
    imagemDiv.classList.add("tweet-image");
    novoTweetDiv.appendChild(imagemDiv);

    var imagem = document.createElement("img");
    imagem.classList.add("actual-tweet-image")
    imagemDiv.appendChild(imagem);
    imagem.src = foto;

    var tweetDeFactoDiv = document.createElement("div");
    tweetDeFactoDiv.classList.add("tweet-de-facto");
    novoTweetDiv.appendChild(tweetDeFactoDiv);

    var userList = document.createElement("ul");
    userList.classList.add("user-info");
    tweetDeFactoDiv.appendChild(userList);

    var userItem = document.createElement("li");
    userList.appendChild(userItem);
    var user = document.createElement("h2");
    user.textContent = usuario;
    userItem.appendChild(user);

    var usernameItem = document.createElement("li");
    userList.appendChild(usernameItem);
    var username = document.createElement("p");
    username.classList.add("tweet-username");
    username.textContent = "@" + usuario;
    usernameItem.appendChild(username);

    var message = document.createElement("p");
    message.classList.add("tweet-message");
    message.textContent = tweet;
    tweetDeFactoDiv.appendChild(message);

    var actionIconsList = document.createElement("ul");
    actionIconsList.classList.add("action-icons");
    tweetDeFactoDiv.appendChild(actionIconsList);

    var commentItem = document.createElement("li");
    actionIconsList.appendChild(commentItem);
    var comment = document.createElement("p");
    comment.classList.add("comment");
    commentItem.appendChild(comment);

    var retweetItem = document.createElement("li");
    actionIconsList.appendChild(retweetItem);
    var retweet = document.createElement("p");
    retweet.classList.add("retweet");
    retweetItem.appendChild(retweet);
    
    var likeItem = document.createElement("li");
    actionIconsList.appendChild(likeItem);
    var like = document.createElement("p");
    like.classList.add("like");    
    likeItem.appendChild(like);

    var highlightButton = document.createElement("button");
    novoTweetDiv.appendChild(highlightButton);
    highlightButton.textContent = "Destacar";
    highlightButton.classList.add("destacar");
    highlightButton.addEventListener("click", function(event) {
        event.preventDefault();
        piusBox.insertAdjacentElement('afterend', event.target.parentNode);
        event.target.parentNode.classList.add("destacado");
    });

    var deleteButton = document.createElement("button");
    novoTweetDiv.appendChild(deleteButton);
    deleteButton.textContent = "Deletar";
    deleteButton.classList.add("deletar");
    deleteButton.addEventListener("click", function(event) {
        event.preventDefault();
        event.target.parentNode.classList.add("deletado");

        setTimeout(function() {
            event.target.parentNode.remove();
        }, 350);
    });

    campo.value = "";

}