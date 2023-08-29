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
        question:'Wat is de hoofdstad van Australië?',
        choice1: 'Sydney',
        choice2: 'Melbourne',
        choice3: 'Canberra',
        choice4: 'Brisbane',
        answer: 3,
    },
    {
        question:'Welke beroemde wetenschapper formuleerde de relativiteitstheorie?',
        choice1: 'Isaac Newton',
        choice2: 'Albert Einstein',
        choice3: 'Marie Curie',
        choice4: 'Jakubski Dupski',
        answer: 2,
    },
    {
        question:'Welke beroemde schilder sneed zijn eigen oor af?',
        choice1: 'Vincent van Gogh',
        choice2: 'Pablo Picasso',
        choice3: 'Leonardo da Vinci',
        choice4: 'Rembrandt van Rijn',
        answer: 1,
    },
    {
        question:'Wat is de grootste planeet in ons zonnestelsel?',
        choice1: 'Venus',
        choice2: 'Mars',
        choice3: 'Jupiter',
        choice4: 'Saturnus',
        answer: 3,
    },
    {
        question:'Welke rivier is het langst?',
        choice1: 'Nijl',
        choice2: 'Mississippi',
        choice3: 'Amazone',
        choice4: 'Yangtze',
        answer: 3,
    },
    {
        question:'Wie schreef het toneelstuk "Romeo en Julia"?',
        choice1: 'Charles Dickens',
        choice2: 'William Shakespeare',
        choice3: 'Jane Austen',
        choice4: 'Mark Twain',
        answer: 2,
    },
    {
        question:'Welk continent staat bekend als "het donkere continent"?',
        choice1: 'Europa',
        choice2: 'Azië',
        choice3: 'Afrika',
        choice4: 'Zuid-Amerika',
        answer: 3,
    },
    {
        question:'Wat is de grootste orgaan in het menselijk lichaam?',
        choice1: 'Lever',
        choice2: 'Hart',
        choice3: 'Hersenen',
        choice4: 'Longen',
        answer: 1,
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