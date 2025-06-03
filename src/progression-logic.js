import readlineSync from 'readline-sync'

let name = ''

export const greetUser = () => {
  console.log('Welcome to the Brain Games!')
  name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
}

export const askQuestion = () => {
  console.log('What number is missing in the progression?')

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  // 1. Генерируем прогрессию
  const length = getRandomNumber(5, 10) // Длина 5-10 чисел
  const start = getRandomNumber(1, 20) // Начальное число
  const step = getRandomNumber(1, 10) // Шаг прогрессии
  const hiddenIndex = getRandomNumber(0, length - 1) // Какой элемент скрываем

  // 2. Создаем массив прогрессии
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }

  // 3. Запоминаем ответ и скрываем элемент
  const answer = progression[hiddenIndex]
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  // 4. Задаем вопрос
  console.log(`Question: ${question}`)
  const userAnswer = Number(readlineSync.question('Your answer: '))

  // 5. Проверяем ответ
  if (userAnswer === answer) {
    console.log('Correct!')
    return true
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
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
