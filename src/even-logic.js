import readlineSync from 'readline-sync'

export const even = () => {
  let name = ''

  const greetUser = () => {
    console.log('Welcome to the Brain Games!')
    name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)
  }

  const askQuestion = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
    const num = getRandomNumber(1, 100)

    console.log(`Question: ${num}`)
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no'
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase()

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
      return true
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return false
    }
  }

  // Основная логика игры
  greetUser()

  const roundsCount = 3
  let correctAnswers = 0

  while (correctAnswers < roundsCount) {
    const isCorrect = askQuestion()

    if (isCorrect) {
      correctAnswers++
    } else {
      return // Завершаем игру при ошибке
    }
  }

  console.log(`Congratulations, ${name}!`)
}
