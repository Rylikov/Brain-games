import toPlay from '..';
import random from '../utils';

const isEven = num => (num % 2 === 0);
const task = 'Answer "yes" if number even otherwise answer "no"';
const even = () => {
  const gameSettings = () => {
    const question = random(1, 30);
    const rightAnswer = (isEven(question) ? 'yes' : 'no');
    return { question, rightAnswer };
  };
  toPlay(task, gameSettings);
};
export default even;
