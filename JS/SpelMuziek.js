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
        question:'Welke legendarische rockband staat bekend om nummers als "Bohemian Rhapsody" en "We Will Rock You"?',
        choice1: 'The Rolling Stones',
        choice2: 'Led Zeppelin',
        choice3: 'Queen',
        choice4: 'The Beatles',
        answer: 3,
    },
    {
        question:'Welk instrument wordt bespeeld door het indrukken van toetsen en wordt vaak geassocieerd met klassieke muziek?',
        choice1: 'Gitaar',
        choice2: 'Viool',
        choice3: 'Saxofoon',
        choice4: 'Piano',
        answer: 4,
    },
    {
        question:'Welke zangeres wordt "The Queen of Pop" genoemd en heeft hits als "Like a Virgin" en "Material Girl"?',
        choice1: 'Britney Spears',
        choice2: 'Madonna',
        choice3: 'Lady Gaga',
        choice4: 'Beyoncé',
        answer: 2,
    },
    {
        question:'Welk album van Michael Jackson is het bestverkochte album aller tijden?',
        choice1: 'Thriller',
        choice2: 'Bad',
        choice3: 'Dangerous',
        choice4: 'Off The Wall',
        answer: 1,
    },
    {
        question:'Welk beroemd festival trekt elk jaar duizenden mensen naar de woestijn van Nevada voor kunst, muziek en creativiteit?',
        choice1: 'Coachella',
        choice2: 'Burning Man',
        choice3: 'Woodstock',
        choice4: 'Glastonbury',
        answer: 2,
    },
    {
        question:'Welk muziekinstrument wordt bespeeld door de lippen samen te knijpen en er lucht doorheen te blazen, waardoor een karakteristiek geluid ontstaat?',
        choice1: 'Fluit',
        choice2: 'Trompet',
        choice3: 'Trombone',
        choice4: 'Saxofoon',
        answer: 2,
    },
    {
        question:'Welke Britse band is bekend van hits als "Clocks" en "Fix You"?',
        choice1: 'Coldplay',
        choice2: 'Radiohead',
        choice3: 'Oasis',
        choice4: 'U2',
        answer: 1,
    },
    {
        question:'Welke zangeres had hits als "Rolling in the Deep" en "Someone Like You"?',
        choice1: 'Adele',
        choice2: 'Taylor Swift',
        choice3: 'Katy Perry',
        choice4: 'Rihanna',
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

        return window.location.assign('../HTML/end.html')
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