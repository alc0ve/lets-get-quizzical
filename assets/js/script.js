// let olTags = document.querySelectorAll("li");

// olTags[0].setAttribute("style", "font-size: 16px", "border: 3px", "border-radius: 5px");


//Start Quiz clicked and quiz starts
let startBtn = document.getElementById("start-btn");
startBtn.addEventListener ("click", startQuiz);


let startPage = document.getElementById("startpage");
//Q1
let q1 = document.getElementById("question1");

const a1Data = ['strings','booleans','alerts','numbers'];
let a1 = document.getElementById("answers1");

//Q2
let q2 = document.getElementById("question2");

//start quiz
function startQuiz() {
    startPage.classList.add("hidden");
    q1.classList.remove("hidden");
    q1.textContent = "Commonly used data types DO NOT include:";

    a1Data.forEach((item) => {
        let li = document.createElement ("li");
        li.innerText = item;
        a1.appendChild (li);
    });
    

}

//fx after first/each question
function nextQuestion() {
    q1.classList.add("hidden");
    q2.classList.remove("hidden");
    q2.textContent = "The condition in an if/else statement is enclosed with _______."
}

//fx for score form at the end of game


//timer
var timeEl = document.getElementById("timer");

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
    })
}

//penalty time taken away




//Commonly used data types DO NOT include:
//1. strings
//2. booleans
//3. alerts
//4. numbers

//The condition in an if/else statement is enclosed with _______.
//1. quotes
//2. curly brackets
//3. parenthesis
//4. square brackets

//Arrays in JavaScript can be used to store _______.
//1. numbers and strings
//2. other arrays
//3. booleans
//4. all of the above

//String values must be enclosed within ______ when being assigned to variables.
//1. commas
//2. curly brackets
//3. quotes
//4. parenthesis

//A very useful tool used during development and debugging for printing content to the debugger is:
//1. JavaScript
//2. terminal/bash
//3. for loops
//4. console.log

//Inside which HTML element do we put the JavaScript?
//1. <javascript>
//2. <scripting>
//3. <js>
//4. <script>

//How can you add a comment in a JavaScript?
//1. 'This is a comment
//2. //This is a comment
//3. <!-- This is a comment -->
//4. *This is a comment

//Which operator is used to assign a value to a variable?
//1. =
//2. -
//3. X
//4. ~

//Which event occurs when the user clicks on a HTML element?
//1. onclick
//2. onchange
//3. onmouseclick
//4. onmouseover