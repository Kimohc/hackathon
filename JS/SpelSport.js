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
        question:'Welke sporter wordt ook wel "The Greatest" genoemd en wordt beschouwd als een van de beste boksers aller tijden?',
        choice1: 'Mike Tyson',
        choice2: 'Muhammad Ali',
        choice3: 'Evander Holyfield',
        choice4: 'Floyd Mayweather',
        answer: 2,
    },
    {
        question:'In welke sport is een "slam dunk" een spectaculaire manier om punten te scoren?',
        choice1: 'Voetbal',
        choice2: 'Basketbal',
        choice3: 'Tennis',
        choice4: 'Golf',
        answer: 2,
    },
    {
        question:'Welke atleet houdt het wereldrecord voor de snelste tijd op de 100 meter sprint?',
        choice1: 'Usain Bolt',
        choice2: 'Carl Lewis',
        choice3: 'Michael Johnson',
        choice4: 'Tyson Gay',
        answer: 1,
    },
    {
        question:'Welke bal wordt gebruikt in een officiële wedstrijd van American football?',
        choice1: 'Basketbal',
        choice2: 'Voetbal',
        choice3: 'RugbyBall',
        choice4: 'American football',
        answer: 4,
    },
    {
        question:'Welke sport wordt beoefend in een baan genaamd een "velodrome"?',
        choice1: 'Schaatsen',
        choice2: 'Wielrennen',
        choice3: 'Wielrennen',
        choice4: 'Skateboarden',
        answer: 2,
    },
    {
        question:'Welk land is gastheer geweest van de meeste Olympische Zomerspelen?',
        choice1: 'Verenigde Staten',
        choice2: 'Duitsland',
        choice3: 'Frankrijk',
        choice4: 'Japan',
        answer: 4,
    },
    {
        question:'Hoeveel spelers telt een standaard voetbalteam in het veld tijdens een wedstrijd?',
        choice1: '9',
        choice2: '10',
        choice3: '11',
        choice4: '12',
        answer: 3,
    },
    {
        question:'Welke sport wordt gespeeld in een ring genaamd een "octagon"?',
        choice1: 'Boksen',
        choice2: 'Worstelen',
        choice3: 'MMA',
        choice4: 'Karate',
        answer: 3,
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