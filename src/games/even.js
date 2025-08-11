import getRandomInt from '../utils.js'
import runEngine from '../engine.js'

const isEven = num => num % 2 === 0

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".'
  const rounds = Array.from({ length: 3 }, () => {
    const question = getRandomInt(1, 100)
    const answer = isEven(question) ? 'yes' : 'no'
    return [String(question), answer]
  })

  runEngine(description, rounds)
}
