import toPlay from '..';
import random from '../utils';

const length = 10;
export default () => {
  const task = 'What number is missing in the progression?';
  const gameSettings = () => {
    const hiddenElementPosition = random(0, length - 1);
    const stepOfProgression = random(1, 6);
    const firstElement = random(1, 10);
    const rightAnswer = String(hiddenElementPosition * stepOfProgression + firstElement);
    let question = '';
    for (let i = 0; i < length; i += 1) {
      if (i === hiddenElementPosition) {
        question = `${question}.. ${(i += 1) * stepOfProgression + firstElement} `;
      } else {
        question = `${question} ${i * stepOfProgression + firstElement} `;
      }
    }
    question.trim();
    return { question, rightAnswer };
  };
  toPlay(task, gameSettings);
};
