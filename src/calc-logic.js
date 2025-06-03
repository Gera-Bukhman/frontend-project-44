import readlineSync from 'readline-sync'

let name = ''

export const greetUser = () => {
  console.log('Welcome to the Brain Games!')
  name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
}

export const askQuestion = () => {
  console.log('What is the result of the expression?')

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const getRandomOperator = () => ['+', '*'][Math.floor(Math.random() * 2)]

  const calculate = (a, b) => {
    switch (operator) {
    case '+': return a + b
    case '*': return a * b
    default: return NaN
    }
  }

  const num1 = getRandomNumber(1, 10)
  const num2 = getRandomNumber(1, 10)
  const operator = getRandomOperator()

  console.log(`Question: ${num1} ${operator} ${num2}`)
  const correctAnswer = calculate(num1, num2, operator)
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
