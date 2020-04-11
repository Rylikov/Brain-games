import toPlay from '..';
import random from '../utils';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const task = 'Answer "yes" if number is prime otherwise answer "no"';
export default () => {
  const gameSettings = () => {
    const num = random(-10, 100);
    const question = num;
    const rightAnswer = (isPrime(num) ? 'yes' : 'no');
    return { question, rightAnswer };
  };
  toPlay(task, gameSettings);
};
