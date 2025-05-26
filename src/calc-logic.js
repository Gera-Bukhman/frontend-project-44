import readlineSync from 'readline-sync';

export const calc = () => {
  let name = '';
  
  const greetUser = () => {
    console.log('Welcome to the Brain Games!');
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
  };

  const askQuestion = () => {
    console.log('What is the result of the expression?');
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
   

    const getRandomOperator = () => {
  const operators = ['+', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '*': return a * b;
    default: return NaN;
  }
};

const num1 = getRandomNumber(1, 10);
const num2 = getRandomNumber(1, 10);
const operator = getRandomOperator();

console.log(`Question: ${num1} ${operator} ${num2}`);
const correctAnswer = calculate(num1, num2, operator);
const userAnswer = readlineSync.question('Your answer: ');
    
    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      return true;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  };

  
  greetUser();
  
  const roundsCount = 3;
  let correctAnswers = 0;
  
  while (correctAnswers < roundsCount) {
    const isCorrect = askQuestion();
    
    if (isCorrect) {
      correctAnswers++;
    } else {
      return; // Завершаем игру при ошибке
    }
  }
  
  console.log(`Congratulations, ${name}!`);
};