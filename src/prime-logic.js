import readlineSync from 'readline-sync'

let name = ''

export const greetUser = () => {
  console.log('Welcome to the Brain Games!')
  name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
}

export const askQuestion = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  function isPrime(number) {
    if (number <= 1) return false
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false
    }
    return true
  }

  const num1 = getRandomNumber(1, 10)

  console.log(`Question: ${num1}`)
  const correctAnswer = isPrime(num1) ? 'yes' : 'no'
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
