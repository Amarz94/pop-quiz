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

    var score       = 0
    var secondsLeft = 60

    var ulCreate    = document.createElement("ul");
    var hCreate     = document.createElement("h1")
    
    var questions   = ["how many", "who was", "what class", "what area"]
    var meow      = [
                        {
                            choice: ["9","6","12","14"]
                        },
                        {
                            choice: ["Dragon","orc","Naga","Elf"]
                        },
                        {
                            choice: ["Paladin","Rogue","warrior","druid"]
                        },
                        {
                            choice: ["durotar", "duskwood", "badlands", "mulgore"]
                        }
                    ]
    var answers     = ["12", "Dragon", "Rogue", "durotar"]
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
        quizWin.setAttribute("style", "display: block")
        questionNum++;
        mainWin.innerHTML  = " "
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
            score = score + 5
            curScore.innerHTML = "Score: " + score

        } else {
            console.log(event.target.textContent)
            eval.textContent = "Wrong!"
            secondsLeft = secondsLeft -10
            
        }
        questStage();
    })
        

        
        
        



       

    
    

    function endPage() {
        hsWin.setAttribute("style", "display: block")
        quizWin.setAttribute("style", "display: none")
    }
}
