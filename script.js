window.onload = function() {
    var mainWin     = document.querySelector(".mainWin")
    var timeLeft    = document.querySelector(".timer")
    var quizWin     = document.querySelector(".quizWin")
    var startBtn    = document.querySelector("#startBtn")
    var hsWin       = document.querySelector(".hsWin")
    var qHead       = document.querySelector(".qHead")
    var liAnswer    = document.querySelector(".liAnswer")
    var eval        = document.querySelector(".eval")
    var curScore    = document.querySelector(".score")
    var scoreCard   = document.querySelector("#scoreCard")
    var initInput   = document.querySelector("#initInput")
    var submitBtn   = document.querySelector(".submitBtn")
    var msgDiv      = document.querySelector("#msg");
    var scorePage    = document.querySelector("#scorePage")

    var score       = 0
    var secondsLeft = 60

    var ulCreate    = document.createElement("ul");
    var hCreate     = document.createElement("h1")
    
    var questions   = ["How many classes were there in Vanilla WoW?", "Who was the Warchief of the horde at that time?", "What class was the Warchief?", "What was the name of Horde capital city?"]
    var meow      = [
                        {
                            choice: ["9","6","12","14"]
                        },
                        {
                            choice: ["Baine","Thrall","Sylvanas","Vol'Jin"]
                        },
                        {
                            choice: ["Warlock","Rogue","Warrior","Shaman"]
                        },
                        {
                            choice: ["Stormwind", "Orgrimmar", "UnderCity", "Ironforge"]
                        }
                    ]
    var answers     = ["9", "Thrall", "Shaman", "Orgrimmar"]
    var questionNum = -1;
    var answer;

    

    startBtn.addEventListener("click", function() {
            
        var timeSet = setInterval(function() {
            secondsLeft--;
            timeLeft.textContent = "Time: " + secondsLeft + " seconds left.";
            console.log(timeLeft)

            if(secondsLeft === 0 || questionNum === 4) {
            clearInterval(timeSet);
            timeLeft.textContent = "Times up!"
            endPage();
            } 

        }, 1000);questStage();

    })


    function questStage() {
        mainWin.setAttribute("style", "display: none")
        quizWin.setAttribute("style", "display: block")
        questionNum++;
        liAnswer.innerHTML = " "
        answer = answers[questionNum]
        
        qHead.textContent = questions[questionNum]
        
        var choices = meow[questionNum].choice

        for( i = 0; i < choices.length; i++) {
            
            var nextChoice = document.createElement("button");

            nextChoice.textContent = choices[i]
            answerBtn = liAnswer.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");

        }
    }

    liAnswer.addEventListener("click", function(event) {
        if(answer === event.target.textContent) {
            eval.textContent = "Correct!"
            score = score + 10
            curScore.innerHTML = "Score: " + score

        } else {
            console.log(event.target.textContent)
            eval.textContent = "Wrong!"
            secondsLeft = secondsLeft -10
            score = score - 5
            
        }
        questStage();
    })
        
    function endPage() {
        curScore.innerHTML = ""
        hsWin.setAttribute("style", "display: block")
        quizWin.setAttribute("style", "display: none")
        if(score > 0) {
            scoreCard.setAttribute("value", score + secondsLeft)
        } else {
            scoreCard.setAttribute("value", score - score)
        }

    }


    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        var scoreVal = document.querySelector("#scoreCard").value
        var initial = document.querySelector("#initInput").value;
        console.log(initial)
        var existFile = JSON.localStorage.getItem("Initials")
        if(existFile === null) existFile = []
        var newEntry = {
            "Initial": initial,
            "Score": scoreVal
        };
         localStorage.setItem("score", JSON.stringify(newEntry))
         existFile.push(newEntry)
         localStorage.setItem("allEntry", JSON.stringify(existFile))   
        if(initial === ""){
            msgDiv.textContent = "Error: Cannot leave initals blank!";
        } else {
            msgDiv.textContent = "Success: Registered successfully!";
            localStorage.setItem("Score", score);
            localStorage.setItem("Initials", initial);
        }init();
    })

    function init() {
    hsWin.setAttribute("style","display: none")
    scorePage.setAttribute("style", "display: block")

    var existFile = JSON.localStorage.getItem("Initials")
    var Score    = localStorage.getItem("Score")
    var createLi = document.createElement("div")
    createLi.textContent = "Initials: " + Initials + "||    Score: " + Score;
    
    console.log(Initials)
    console.log(Score)
    document.getElementById("scorePage").appendChild(createLi)
    



}



}
