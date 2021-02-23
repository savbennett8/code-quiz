//first screen needs high score link, timer, h1 "Coding Quiz Challenge" 
    //explanation, & start quiz button
//when button is clicked, the timer starts and first question appears
//buttons need to highlight when I hover over them
//a faded notification indicates whether it was correct or incorrect
    //after it moves on to the next question
//if incorrect, subtract 10 seconds from timer
//time remaining when code is complete is the score
//score page prompts for user's initials and submit
//then they are taken to the high scores page
//given the option to go back to start page or clear high scores

let interval = 0;
let correct = 0;
let index = 0;

let topSection = document.querySelector("#top-content")
let viewScoresBtn = document.querySelector("#scores")

//Start Section
let startSection = document.querySelector("#container");
let timerEl = document.querySelector(".count");
let quizTitle = document.querySelector("#title");
let rules = document.querySelector("#rules");
let start = document.querySelector("#start");

//quiz section
let quizSection = document.querySelector(".quiz-box");
let quiz = document.querySelector("#quiz");
let question = document.querySelector("#questionText");
let footer = document.querySelector(".footer");

//multiple choice
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

//result section
let result = document.querySelector("#result");
let finalScore = document.querySelector("#final-score");
let initials = document.querySelector("intials");
let submit = document.querySelector("#submit");

//high scores page
let highScores = document.querySelector("#high-scores");
let backBtn = document.querySelector("#back-btn");

//get 'h4' from quiz section
let choice_que = document.querySelectorAll(".choice_que");


let MCQS = [{
    question: "HTML stands for:",
    choice1: "Hyperlinks and Text Markup Language",
    choice2: "Hyper Text Markup Language",
    choice3: "Hyper Text Making Language",
    choice4: "Hyper Text Mark Language",
    answer: 1
}, {
    question: "What does CSS stand for?",
    choice1: "Colorful StyleSheet",
    choice2: "Creative Style Sheet",
    choice3: "Cascading Style Sheet",
    choice4: "Computer Style Sheet",
    answer: 2
}, {
    question: "Which HTML tag is used to define an internal style sheet",
    choice1: "<script>",
    choice2: "<style>",
    choice3: "<html>",
    choice4: "svg",
    answer: 1
}, {
    question: "Which is the correct CSS syntax?",
    choice1: "body{color:black}",
    choice2: "{body{color:black}",
    choice3: "body={color:black}",
    choice4: "body:color{black}",
    answer: 0
}, {
    question: "How do you insert a comment in a JS file?",
    choice1: "<!-- This is a comment -->",
    choice2: "//This is a comment//",
    choice3: "//This is a comment",
    choice4: "/*This is a comment*/",
    answer: 2, 
    answer: 3
}];

//when start quiz button is clicked
start.addEventListener("click", function() {
    //first question is presented
    startSection.style.display = "none";
    quizSection.style.display = "block";
    //question data is loaded to page
    loadData();
    //countDown starts
    countDown();
});

let timeLeft = 75;
let timeInterval;

function countDown() {
    //timer for quiz
    timeInterval = setInterval(function() {
        if (timeLeft <= 0) {
        //end quiz
        clearInterval(timeInterval);
        } else {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}



let loadData = function() {
    if (index < MCQS.length) {
        question.innerText = MCQS[index].question;
        option1.innerText = MCQS[index].choice1;
        option2.innerText = MCQS[index].choice2;
        option3.innerText = MCQS[index].choice3;
        option4.innerText = MCQS[index].choice4;
    } else {
        endQuiz();
    }
}



choice_que.forEach((choices, choiceNo) =>{
    
    choices.addEventListener("click", ()=>{
        console.dir(choices);
        choices.classList.add("active");
        //check answer
        if(choiceNo === MCQS[index].answer) {
            //display correct
            footer.style.display = "block";
            footer.textContent = "Correct!";
            console.log("correct");
        } else {
            //display incorrect
            footer.textContent = "incorrect";
            console.log("incorrect");
            //subtract 10 seconds from timer
            timeLeft = timeLeft - 10;
        }
        //load new question
        index++;
        loadData();
    });
})

let endQuiz = function() {
    result.style.display = "block";
    quizSection.style.display = "none";
    topSection.style.display = "none";

    clearInterval(timeInterval);
    finalScore.innerText = timeLeft;

    submit.addEventListener("click", function() {
        //saveScore();

        highScores.style.display = "block";
        result.style.display = "none";

        //get all saved data from localStorage & append data to highScores page
    })
}

backBtn.addEventListener("click", function() {
    location.reload();
})

let scores = {};

let saveScore = function() {
    localStorage.setItem("scores", scores);
}

