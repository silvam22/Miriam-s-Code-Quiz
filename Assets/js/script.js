// Declaring variables
var startBtn = document.querySelector(".start")
var openingContainer = document.querySelector(".opening_container")
var quizContainer = document.querySelector(".quiz_container")
var highscoresContainer = document.querySelector(".high_scores_container")

var timer = 0
var currentQuestion = 0
var highscores = [{
    name: "Player one",
    score: "5",
}]
var questions = [
    {
        question: "Do all html tags come in a pair?",
        answers: ["no, there are single html tags that do not need a closing tag", "yes, they all need a pair", "i'm not sure", "what is html"],
        correct: "no, there are single html tags do not need a closing tag"
    },
    {
        question: "What is a data structure?",
        answers: ["A data structure is a storage format that defines the way data is stored, organized, and manipulated. ", "I'm not sure", "It's a painting", "A building"],
        correct: "A data structure is a storage format that defines the way data is stored, organized, and manipulated."
    },
    {
        question: "What is an array?",
        answers: ["An array is commonly referred to as a collection of items stored at contiguous memory locations.", "I'm not sure", "no", "It's a place in Seattle"],
        correct: "An array is commonly referred to as a collection of items stored at contiguous memory locations."
    },
    {
        question: "What is a linked list?",
        answers: ["A linked list refers to a linear data structure in which the elements are not necessarily stored in a contiguous manner.", "I'm not sure", "no", "It's an asset"],
        correct: "A linked list refers to a linear data structure in which the elements are not necessarily stored in a contiguous manner."
    }
]

startBtn.addEventListener("click", function () {
    openingContainer.style.display = "none"
    quizContainer.style.display = "block"
    startTimer()
    renderQuiz(questions[0])
})

function renderQuiz(quiz) {
    console.log(quiz)
    let html = `
<h1>${quiz.question}</h1>
<ol>
    <li onclick="nextQuiz(event)">${quiz.answers[0]}</li>
    <li onclick="nextQuiz(event)">${quiz.answers[1]}</li>
    <li onclick="nextQuiz(event)">${quiz.answers[2]}</li>
    <li onclick="nextQuiz(event)">${quiz.answers[3]}</li>
</ol>
`
    quizContainer.innerHTML = html
    currentQuestion++
}

function startTimer() {
    timer = 60
    var timerElement = document.querySelector(".timer")
    timerElement.innerHTML = timer
    var timerId = setInterval(() => {
        timer = timer - 1
        if (timer < 0) {
            timer = 0
            clearInterval(timerId)
            timerElement.innerHTML = timer
        }

        timerElement.innerHTML = timer
    }, 1000);


}
function reducedTime() {
    timer = timer - 5
}
function nextQuiz(event) {

    if (currentQuestion < questions.length) {
        console.log(event.target.innerHTML)
        renderQuiz(questions[currentQuestion])
    } else {
        var formHtml = `
    <h3>Highscores</h3>
    <form>
    <p>Enter Initials</p> 
    <input type="text" id="name_input"> 
    <input type="submit">
 </form>
    `
        quizContainer.innerHTML = formHtml
    }
}
function loadscores (){
    for (let i = 0; i < highscores.length; i++) {
        var tr = document.createElement("tr")
        var html = `
        <td>${highscores[i].name}</td>
                <td>${highscores[i].score}</td>
        `
        tr.innerHTML = html
        document.querySelector("tbody").appendChild(tr)
    }
}
document.querySelector(".high_scores").addEventListener("click", function () {
    highscoresContainer.style.display = "block"
    openingContainer.style.display = "none"
    quizContainer.style.display = "none"
timer=0
loadscores()
})
document.querySelector(".go_back").addEventListener("click", function () {
    highscoresContainer.style.display = "none"
    openingContainer.style.display = "block"
    quizContainer.style.display = "none"
})
document.querySelector(".clear_scores").addEventListener("click", function () {
    highscores.length = 0
    document.querySelector("tbody").innerHTML= ""
})
