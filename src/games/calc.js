import toPlay from '..';
import random from '../utils';

const task = 'What is the result of the expression';

const calc = () => {
  const gameSettings = () => {
    const firstOperand = random(1, 15);
    const secondOperand = random(1, 15);
    const numOfOperation = random(1, 3);
    let rightAnswer;
    let question;
    switch (numOfOperation) {
      case '1':
        question = `${firstOperand} + ${secondOperand}`;
        rightAnswer = String(firstOperand + secondOperand);
        break;
      case '2':
        question = `${firstOperand} - ${secondOperand}`;
        rightAnswer = String(firstOperand - secondOperand);
        break;
      default:
        question = `${firstOperand} * ${secondOperand}`;
        rightAnswer = String(firstOperand * secondOperand);
        break;
    }
    return { question, rightAnswer };
  };
  toPlay(task, gameSettings);
};

export default calc;
