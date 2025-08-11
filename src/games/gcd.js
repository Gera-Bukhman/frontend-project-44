import getRandomInt from '../utils.js';
import runEngine from '../engine.js';

const getGcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const rounds = Array.from({ length: 3 }, () => {
    const a = getRandomInt(1, 50);
    const b = getRandomInt(1, 50);
    const question = `${a} ${b}`;
    const answer = String(getGcd(a, b));
    return [question, answer];
  });

  runEngine(description, rounds);
};
