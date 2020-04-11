import toPlay from '..';
import random from '../utils';

const task = 'Find the greatest common divisor of given numbers.';

const searchGcd = (a, b) => (b === 0 ? a : searchGcd(b, (a % b)));
const gcd = () => {
  const gameSettings = () => {
    const firstOperand = random(1, 30);
    const secondOperand = random(1, 100);
    const question = `${firstOperand}  ${secondOperand}`;
    const rightAnswer = String(searchGcd(firstOperand, secondOperand));
    return { question, rightAnswer };
  };
  toPlay(task, gameSettings);
};

export default gcd;
