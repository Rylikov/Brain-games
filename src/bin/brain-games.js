#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
greetings();
