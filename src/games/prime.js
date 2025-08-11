import getRandomInt from '../utils.js'
import runEngine from '../engine.js'

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }
  return true
}

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  const rounds = Array.from({ length: 3 }, () => {
    const question = getRandomInt(1, 50)
    const answer = isPrime(question) ? 'yes' : 'no'
    return [String(question), answer]
  })

  runEngine(description, rounds)
}
