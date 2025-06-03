import readlineSync from 'readline-sync'

let name = ''

export const greetUser = () => {
  console.log('Welcome to the Brain Games!')
  name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
}

export const askQuestion = () => {
  console.log('Find the greatest common divisor of given numbers.')

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const nod = (a, b) => {
    if (b === 0) {
      return a
    }
    return nod(b, a % b)
  }

  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)

  console.log(`Question: ${num1} ${num2}`)
  const correctAnswer = nod(num1, num2)
  const userAnswer = Number(readlineSync.question('Your answer: '))

  if (userAnswer === correctAnswer) {
    console.log('Correct!')
    return true
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    console.log(`Let's try again, ${name}!`)
    return false
  }
}

export const runGame = () => {
  greetUser()

  const roundsCount = 3
  let correctAnswers = 0

  while (correctAnswers < roundsCount) {
    if (askQuestion()) {
      correctAnswers++
    } else {
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}
