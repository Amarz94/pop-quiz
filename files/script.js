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
    
    var questions   = [ "What race was Illidan?","What is his last name?", "What is the name of the location where he resides?",  "Who defeated him in a duel?"]
    var meow      = [
                        {
                            choice: ["Blood Elf", "Night Elf", "Tauren", "Troll"]
                        },
                        {
                            choice: ["Stormrage", "Windbreaker", "Nightbringer", "Shadowbane"]
                        },
                        {
                            choice: ["Emerald Dream", "Hellfire Citadel", "Shattrath City","The Black Temple"]
                        },
                        {
                            choice: ["Thrall", "Sylvanas", "Arthas", "Kel'Thuzad"]
                        }
                    ]
    var answers     = ["Night Elf", "Stormrage", "The Black Temple", "Arthas"]
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

        var initial = document.querySelector("#initInput").value;
        var scoreVal = document.querySelector("#scoreCard").value

        if(initial === null || scoreVal === null) {

        } else {
            var finalScore = {
            Score: scoreVal,
            Name: initial
       }
       console.log(finalScore)
       var allScores = localStorage.getItem("allScores");
       if(allScores === null){
           allScores = [];
       } else {
           allScores = JSON.parse(allScores)
       }
       
        }
          
        if(initial === ""){
            msgDiv.textContent = "Error: Cannot leave initals blank!";
        } else {
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore)
            
            window.location.href = './highscore.html'
        };
    })





}
