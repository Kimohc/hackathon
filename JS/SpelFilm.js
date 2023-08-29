const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = 
[
    {
        question:'Wie speelde de hoofdrol van Tony Stark, ook wel bekend als Iron Man, in het Marvel Cinematic Universe?',
        choice1: 'Chris Hemsworth',
        choice2: 'Robert Downey Jr',
        choice3: 'Chris Evans',
        choice4: 'Mark Ruffalo',
        answer: 2,
    },
    {
        question:'Welke film staat bekend om de beroemde zin "May the Force be with you"?',
        choice1: 'Star Trek',
        choice2: 'Star Wars',
        choice3: 'Guardians of the Galaxy',
        choice4: 'Interstellar',
        answer: 2,
    },
    {
        question:'Wie regisseerde de film "Inception" uit 2010?',
        choice1: 'Christopher Nolan',
        choice2: 'Steven Spielberg',
        choice3: 'Quentin Tarantino',
        choice4: 'James Cameron',
        answer: 1,
    },
    {
        question:'In welke film speelde Tom Hanks de rol van een man die gestrand was op een onbewoond eiland en bevriend raakte met een volleybal genaamd Wilson?',
        choice1: 'Cast Away',
        choice2: 'The Terminal',
        choice3: 'Forrest Gump',
        choice4: 'Saving Private Ryan',
        answer: 1,
    },
    {
        question:'Welke animatiefilm gaat over een rat die zijn droom volgt om chef-kok te worden in een chique Frans restaurant?',
        choice1: 'Finding Nemo',
        choice2: 'Ratatouille',
        choice3: 'Madagascar',
        choice4: 'Kung Fu Panda',
        answer: 2,
    },
    {
        question:'Wie speelde de iconische rol van Jack Dawson in de film "Titanic" uit 1997?',
        choice1: 'Leonardo DiCaprio',
        choice2: 'Brad Pitt',
        choice3: 'Johnny Depp',
        choice4: 'Matt Damon',
        answer: 1,
    },
    {
        question:'Welke televisieserie speelt zich af in het fictieve land Westeros en is gebaseerd op de boeken van George R.R. Martin?',
        choice1: 'The Walking Dead',
        choice2: 'Stranger Things',
        choice3: 'Game of Thrones',
        choice4: 'Breaking Bad',
        answer: 3,
    },
    {
        question:'Welke film volgt het verhaal van een jonge leeuwenprins die verbannen wordt en later terugkeert om zijn rechtmatige plek op de troon op te eisen?',
        choice1: 'Finding Nemo',
        choice2: 'The Lion King',
        choice3: 'Madagascar',
        choice4: 'Jungle Book',
        answer: 2,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 8

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => 
{
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS)
    {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/HTML/end.html')
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionIndex, 1)
    acceptingAnswers = true
}
choices.forEach(choice =>{
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(() =>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)

    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()