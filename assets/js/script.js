
//Start Quiz clicked and quiz starts
let startBtn = document.getElementById("start-btn");

startBtn.addEventListener ("click", startQuiz);

//start quiz
function startQuiz () {
    let q1 = document.getElementById("question1");
    document.getElementById("startpage").innerHTML = q1;
}


//timer
var timeEl = document.getElementById("timer");

function setTime () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
    })
}




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