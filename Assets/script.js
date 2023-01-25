var startButton = document.querySelector("#startBTN");
var questionContainer = document.querySelector("#questions");
var nextButton = document.querySelector("#nextBTN")
var questionEl = document.querySelector('#question')
var questionStatus = true

function start(){
    console.log("starting")
    startButton.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    nextButton.classList.remove('hidden');
    questionIndex = 0
}

function next(){
    showQuestion()
}

function showQuestion(question) {


}


function answer(){

}

startButton.addEventListener('click', start);

var questions = [
    {
        question: "what is the code that can be stored and called on by using the name + '()' ?"
         [
            {text:'function', correct: true},
            {text:'array', correct: false}
        ]
    }
]
