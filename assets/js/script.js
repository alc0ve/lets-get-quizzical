
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
//SETTING A FREAKING INDEX TO THE Q's!!!👊
let index= 0;

//setting question and answers together in a HUGE array instead of just the answers in an array; also was too difficult to set booleans
let qandaArray = [
    {
        question: "Commonly used data types DO NOT include:",
        answerChoices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        //pick number from array, instead of setting true/false, because of course
        rightAnswer: 2
    },
    {
        question: "The condition in an if/else statement is enclosed with _______.",
        answerChoices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        rightAnswer: 2
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        answerChoices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        rightAnswer: 3
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answerChoices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        rightAnswer: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answerChoices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        rightAnswer: 3
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answerChoices: ["1. <script>", "2. <scripting>", "3. <js>", "4. <javascript>"],
        rightAnswer: 0
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answerChoices: ["1. 'This is a comment'", "2. //This is a comment", "3. <!-- This is a comment -->", "4. *This is a comment"],
        rightAnswer: 1
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answerChoices: ["1. =", "2. -", "3. X", "4. ~"],
        rightAnswer: 0
    },
    {
        question: "Which event occurs when the user clicks on a HTML element?",
        answerChoices: ["1. onclick", "2. onchange", "3. onmouseclick", "4. onmouseover"],
        rightAnswer: 0
    }
]

//click to start quiz event listener
startBtn.addEventListener ("click", startQuiz);

//start quiz fx: timer starts as well
function startQuiz() {
    console.log ("This is supposed to start the timer and quiz.")
    //another way to hide a container
    startPage.classList.add("hidden");
    //setting styles for the quizBox...
    quizBox.style.display = "flex";
    quizBox.style.flexWrap = "wrap";
    quizBox.style.flexDirection = "column";
    quizBox.style.alignContent = "center";
    //calling fx for time and quiz
    setTime();
    setQandA();
    //start the time when button is clicked!
    timeStart= true;
}

//timer
let timeStart = false;
let timeRemaining = true;
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

//displaying Questions and Answers for quiz
function setQandA() {
    //have to set index to show up!!! Remember from password generator?!
    //show the question
    actualQuestion.textContent = qandaArray[index].question;
    //show answers text in buttons
    answer1.textContent = qandaArray[index].answerChoices[0];
    answer2.textContent = qandaArray[index].answerChoices[1];
    answer3.textContent = qandaArray[index].answerChoices[2];
    answer4.textContent = qandaArray[index].answerChoices[3];
}

//when first answer box is clicked
answer1.addEventListener("click", function () {
    console.log ("first answer box")
})

//end quiz
function endQuiz() {
    //get rid of the QandA at the end
    document.getElementById("quizBox").style.display="none";
    //show score and initial input
    document.getElementById("allDone").style.display="flex";
    document.getElementById("allDone").style.flexWrap = "wrap";
    document.getElementById("allDone").style.flexDirection = "column";
    document.getElementById("allDone").style.alignItems = "flex-start";
}

function submitScore() {

}
