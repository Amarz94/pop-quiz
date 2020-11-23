window.onload = function(){
var scoreList = document.querySelector("#scoreList")
var clear = document.querySelector("#clearBtn")
var retry = document.querySelector("#retryBtn")

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
// Loop for creating li's with the local storage information
// and appending them to the ul on the highscore.html
if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = "Initials: " + allScores[i].Name + " | " + "Score: " +allScores[i].Score;
        scoreList.appendChild(createLi);

    }
}
clear.addEventListener("click", function() {
    localStorage.clear();
    window.location.href = "./index.html"
})
retry.addEventListener("click", function() {
    window.location.href = "./index.html"
})

}

