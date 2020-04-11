import readlineSync from 'readline-sync';

const rounds = 3;
export default (task, gameSettings) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  console.log('');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < rounds; i += 1) {
    const { question, rightAnswer } = gameSettings();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}\n`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
