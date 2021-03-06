/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */
let flag = 0;
let count = 0;
const str = 'NO, NOT SINCE ';
const rand = getRandomValue(1930, 1950);
print('What do you want to say to Grandma!!');
while (flag === 0) {
  const message = prompt();
  if (message === 'BYE') {
    count += 1;
    if (count === 3) {
      flag = 1;
      break;
    }
    print(str + getRandomValue(1930, 1950));
  } else if (isUppercase(message)) {
    print(`${str}${rand}`);
  } else {
    print('HUH?! SPEAK UP, SONNY!');
  }
}
