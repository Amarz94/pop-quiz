window.onload = function() {


var initScore = document.querySelector(".Initials")



init();

function init() {
    var Initials = localStorage.getItem("Initials")
    var Score    = localStorage.getItem("Score")
    console.log(Initials)
    console.log(Score)
    initScore.textContent = Initials
}
}