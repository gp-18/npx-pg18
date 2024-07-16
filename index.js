#!/usr/bin/env node

"use strict"

import boxen from "boxen"
import chalk from "chalk"
import inquirer from "inquirer"
import clear from "clear"
import open from "open"

// clear the terminal before showing the npx card
clear()
const prompt = inquirer.createPromptModule()
const questions = [
  {
    type: 'list',
    name: 'action',
    message: 'What do you want to do?',
    choices: [
      {
        // Use chalk to style headers
        name: `Toss an ${chalk.bold('email')}?`,
        value: () => {
          open('mailto:parthgupta1803@gmail.com');
          console.log('\nLooking forward to hearing your message and replying to you!....See you Soon in Indox\n');
        },
      },
      {
        name: 'Exit',
        value: () => {
          console.log('Good bye, have a nice day!\n');
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green('                                     Parth Gupta'),
  fact: chalk.hex('#B10000')('NaN stands for Not a Number but typeof NaN is a Number'),
  twitter: chalk.hex('#00A1D9')('https://twitter.com/PGupta1803'),
  github: chalk.hex('#787878')('https://github.com/gp-18'),
  website: chalk.hex('#00AB9E')('https://parthgupta18-react.vercel.app/'),
  npx: chalk.hex('#A1AB00')('npx pg18'),

  labelFact: chalk.hex('#FF6262').bold('        Fun Fact:'),
  labelTwitter: chalk.hex('#629DFF').bold('        Twitter:'),
  labelGitHub: chalk.hex('#9E9E9E').bold('        GitHub:'),
  labelWebsite: chalk.hex('#59FFC8').bold('        Website:'),
  labelCard: chalk.hex('#FFF976').bold('        Card:'),
};

const me = boxen(
  [
    `${data.name}`,
    `${data.labelFact}  ${data.fact}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelWebsite}  ${data.website}`,
    `${data.labelCard}  ${data.npx}`,
    '',
    `${chalk.bold("Hi there! I'm Parth Gupta, I'm a passionate FULL stack ")}`,
    `${chalk.bold('developer and web designer from India, and have a ')}`,
    `${chalk.bold('hobby for creating beautiful, cool, and responsive ')}`,
    `${chalk.bold(
      'web apps and loves solving day-to-day problems by leveraging programming tools. '
    )}`,
    `${chalk.bold(
      'Toss me an email if you want to collab!'
    )}`,
  ].join('\n'),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: 'single',
    borderColor: 'blue',
  }
);

// Show the boxen
console.log(me)
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n")
console.log(tip)

prompt(questions).then((answer) => answer.action())
