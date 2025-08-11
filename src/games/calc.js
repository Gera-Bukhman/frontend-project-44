import getRandomInt from '../utils.js'
import runEngine from '../engine.js'

const operations = ['+', '-', '*']

const calculate = (a, b, op) => {
  switch (op) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    default: throw new Error(`Unknown operator: ${op}`)
  }
}

export default () => {
  const description = 'What is the result of the expression?'
  const rounds = Array.from({ length: 3 }, () => {
    const a = getRandomInt(1, 20)
    const b = getRandomInt(1, 20)
    const op = operations[getRandomInt(0, operations.length - 1)]
    const question = `${a} ${op} ${b}`
    const answer = String(calculate(a, b, op))
    return [question, answer]
  })

  runEngine(description, rounds)
}
