import getRandomInt from '../utils.js';
import runEngine from '../engine.js';

const makeProgression = (start, step, length) => {
  return Array.from({ length }, (_, i) => start + i * step);
};

export default () => {
  const description = 'What number is missing in the progression?';
  const rounds = Array.from({ length: 3 }, () => {
    const start = getRandomInt(1, 10);
    const step = getRandomInt(2, 5);
    const length = 10;
    const hiddenIndex = getRandomInt(0, length - 1);

    const progression = makeProgression(start, step, length);
    const answer = String(progression[hiddenIndex]);
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');

    return [question, answer];
  });

  runEngine(description, rounds);
};
