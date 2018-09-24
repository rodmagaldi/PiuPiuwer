var campo = document.querySelector(".piu-bar");
var piuBox = document.querySelector(".piu-box");
var piusBox = document.querySelector(".pius");

function insertTweet(tweet){
    
    var novoTweetDiv = document.createElement("div");
    novoTweetDiv.classList.add("piu-piu");
    piuBox.appendChild(novoTweetDiv);
    piusBox.insertAdjacentElement('afterend', novoTweetDiv);

    var imagemDiv = document.createElement("div");
    imagemDiv.classList.add("tweet-image");
    novoTweetDiv.appendChild(imagemDiv);

    var imagem = document.createElement("img");
    imagemDiv.appendChild(imagem);

    var tweetDeFactoDiv = document.createElement("div");
    tweetDeFactoDiv.classList.add("tweet-de-facto");
    novoTweetDiv.appendChild(tweetDeFactoDiv);

    var userList = document.createElement("ul");
    userList.classList.add("user-info");
    tweetDeFactoDiv.appendChild(userList);

    var userItem = document.createElement("li");
    userList.appendChild(userItem);
    var user = document.createElement("h2");
    userItem.appendChild(user);

    var usernameItem = document.createElement("li");
    userList.appendChild(usernameItem);
    var username = document.createElement("p");
    username.classList.add("tweet-username");
    usernameItem.appendChild(username);

    // var atSpan = document.createElement("span");

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

    campo.value = "";

}

{/* <div class="piu-piu">
    <div class="tweet-image">
        <img src="images/profile-picture.jpg" alt="Perfil" height=60px width=60px>
    </div>
    <div class="tweet-de-facto">
        <ul class="user-info">
            <li><h2>[usuário]</h2></li>
            <li><p class="tweet-username"><span>@</span>[username]</p></li>
        </ul>
        <p class="tweet-message">Este é o segundo piu mostrado, ou seja, o penúltimo piu proferido. Pode conter uma frase, uma foto, talvez até a localização de quem piou.</p>
        <ul class="action-icons">
            <li><p class="comment">Comentar</p></li>
            <li><p class="retweet">Repiar</p></li>
            <li><p class="like">Gostar</p></li>
        </ul>
    </div>
</div> */}