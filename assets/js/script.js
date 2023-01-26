
//Variables used
let startBtn = document.getElementById("start-btn");
let startPage = document.getElementById("startpage");
let quizBox = document.getElementById('quizBox');
let actualQuestion= document.getElementById("actualQuestion");
let answerChoices= document.getElementById("answerChoices");
let answer1= document.getElementById("answer1");
let answer2= document.getElementById("answer2");
let answer3= document.getElementById("answer3");
let answer4= document.getElementById("answer4");
let finalScore= document.getElementById("finalScore");
let score;
let submitInitials= document.getElementById("submitInitials");
let highscorePage= document.getElementById("high-score-page");
//SETTING A FREAKING INDEX TO THE Q's!!!👊
let index= 0;

//setting question and answers together in a HUGE array instead of just the answers in an array; also was too difficult to set booleans
let qandaArray = [
    {
        question: "Commonly used data types DO NOT include:",
        answerChoices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        rightAnswer: "3. alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with _______.",
        answerChoices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        rightAnswer: "3. parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        answerChoices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        rightAnswer: "4. all of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answerChoices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        rightAnswer: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answerChoices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        rightAnswer: "4. console.log"
    },
    {
        question: "Inside which HTML tag do we put the JavaScript?",
        answerChoices: ["1. script", "2. scripting", "3. js", "4. javascript"],
        rightAnswer: "1. script"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answerChoices: ["1. 'This is a comment'", "2. //This is a comment", "3. <!-- This is a comment -->", "4. *This is a comment"],
        rightAnswer: "2. //This is a comment"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answerChoices: ["1. =", "2. -", "3. X", "4. ~"],
        rightAnswer: "1. ="
    },
    {
        question: "Which event occurs when the user clicks on a HTML element?",
        answerChoices: ["1. onclick", "2. onchange", "3. onmouseclick", "4. onmouseover"],
        rightAnswer: "1. onclick"
    }
]

//click to start quiz event listener
startBtn.addEventListener ("click", startQuiz);

//start quiz fx: timer starts
function startQuiz() {
    score = 0;
    console.log ("This is supposed to start the timer and quiz.")
    //another way to hide a container
    startPage.classList.add("hidden");
    countDown.classList.remove("hidden");
    //setting styles for the quizBox
    quizBox.style.display = "flex";
    quizBox.style.flexWrap = "wrap";
    quizBox.style.flexDirection = "column";
    quizBox.style.alignContent = "center";
    //calling fx for time and quiz
    setTime();
    setQandA();
    //start the time when button is clicked!
    timeStart= true;
    //set high score in an array and append it at the end?; have a way to empty it at the end (clearInterval)
}

//timer
let timeStart = false;
let countDown = document.getElementById("countdown-timer");
let time = 75;
let timerInterval = setInterval(setTime, 1000);

function setTime() {
    if (timeStart)
    time--;
    if (time<=0) {
        endQuiz();
        time = 0;
    }
    document.getElementById("timer").innerHTML = time;
}

//displaying Q&A for quiz
function setQandA() {
    //show the question
    actualQuestion.textContent = qandaArray[index].question;
    //show answers text in buttons
    answer1.textContent = qandaArray[index].answerChoices[0];
    answer2.textContent = qandaArray[index].answerChoices[1];
    answer3.textContent = qandaArray[index].answerChoices[2];
    answer4.textContent = qandaArray[index].answerChoices[3];
}

//setting variables for right/wrong answers
const correctAnswerEl = document.getElementById('correct-answer');
const wrongAnswerEl = document.getElementById('wrong-answer');

//run after clicking answer, to go to next question
function answerChosen(event) {
    console.log (qandaArray[index].rightAnswer);
    console.log (event.target.innerHTML);
    if (event.target.innerHTML == qandaArray[index].rightAnswer) {
        correctAnswerEl.classList.remove("hidden");
        wrongAnswerEl.classList.add("hidden");
        //add 10pts if answer is right
        score+=10;
    } else {
        wrongAnswerEl.classList.remove("hidden");
        correctAnswerEl.classList.add("hidden");
        //take 10secs off if answer is wrong
        time-= 10;
        document.getElementById("timer").innerHTML;
    }
    console.log(score + " this will be my score!");
    console.log(time);
    //index++ will move it to the next question
    index++
    //if quiz is done before timer ends, it'll end regardless of time if finished
    if (index == qandaArray.length-1) {
        endQuiz();
    }
    setQandA(qandaArray[index]);
}


//when first answer box is clicked
answer1.addEventListener("click",(event) => answerChosen(event));

//second answer box is clicked
answer2.addEventListener("click",(event) => answerChosen(event));

//third answer box is clicked
answer3.addEventListener("click",(event) => answerChosen(event));

//fourth answer box is clicked
answer4.addEventListener("click",(event) => answerChosen(event));





//end quiz page; figure this out- total score needs to show up
function endQuiz() {
    correctAnswerEl.classList.add("hidden");
    wrongAnswerEl.classList.add("hidden");
    countDown.classList.add("hidden");
    //get rid of the QandA at the end
    document.getElementById("quizBox").style.display="none";
    //show score and initial input
    document.getElementById("allDone").style.display="flex";
    document.getElementById("allDone").style.flexWrap = "wrap";
    document.getElementById("allDone").style.flexDirection = "column";
    document.getElementById("allDone").style.alignItems = "flex-start";

    localStorage.setItem("scores", score);

    let appendScores = localStorage.getItem("scores");

    finalScore.innerText= appendScores;

    let initialsScores = {
        initials: initials.value.trim()
        // appendScores
    };

    localStorage.setItem("typedInitials", JSON.stringify(initialsScores));
}


//figure this out******
function submitScore() {
    document.getElementById("quizBox").style.display="none";
    document.getElementById("allDone").style.display="none";
    document.getElementById("high-score-page").style.display= "flex";
    document.getElementById("high-score-page").style.flexWrap= "wrap";
    document.getElementById("high-score-page").style.flexDirection= "wrap";
    document.getElementById("high-score-page").style.alignItems= "flex-start";

    }

//take back to welcome page
function goBack () {
    startPage.classList.remove("hidden");
    highscorePage.classList.add("hidden");
    document.getElementById("allDone").style.display= "none";
    reloadQuiz();
}

//clear high scores from view high scores page; clearInvterval??
// function clearhs() {
//     clearInterval(appendScores);
// }


// reload the quiz to retake
function reloadQuiz() {
  location.reload();
}


    // if localStorage.scores does not exit then localStorage.scores is an array with a value; and if it does exist, then we'll use push


// let localStorage = {}

// localStorage.scores = []

// let newScore = {BR: 10}
// let myArr = localStorage.scores
// myArr.push(newScore)

// localStorage.scores = myArr

//final score should be whatever their score is at the end of the quiz. the final score at the end of the quiz should be push into an array of scores. high score should return the highest number in the array of scores