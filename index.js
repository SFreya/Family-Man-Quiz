var readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;
var finalScore=0;

var playerName=readlineSync.question(log(chalk.bold.green("Player Name")));

log(chalk.italic.yellow("Welcome "+ chalk.yellow(playerName) + " to Family Man Quiz"));

var highScore=[{
  name: "Srikant",
  score:10
},
{
  name:"JK",
  score:9
}];

function quiz(question,answer)
{
  var userAnswer=readlineSync.question(log(chalk.blue(question)));

  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log("Correct!");
    finalScore=finalScore+1;
  }
  else
  {
    console.log("Wrong");
    finalScore=finalScore-1;
  }

  console.log("Current Score = ",finalScore);
    console.log("###########");
}

var questions=[{
    question: `
      What's the name of the department Srikant works with?
      a: Threat Analysis and Surveillance Cell 
      b: Threat Analysis and Surveillance Wing 
      c: Terrorism Analysis and Surveillance Cell
    d: Threat Analysis Wing \n`,
          answer: "a"
  } ,{
    question: `
      The scene that birthed a hundred memes! Srikant claims the man he is chasing is a thief who has stolen something valuable from him. What item does he say has been stolen? 
  
      a: Mobile phone 
      b: Mangal Sutra 
      c: Cash
    d: Watch \n`,
          answer: "b"
  }, {
    question: `
      Complete this dialogue from the show: "Privacy is a myth, just like ___. "
  
      a: Religion 
      b: Democracy 
      c: Freedom
    d: Ummmm.... \n`,
          answer: "b"
  },
  {
    question: `
      Atharv, finds his gun in the house. What does Atharv demand from Srikant to keep this information a secret?
  
      a: Ice-cream 
      b: Playstation 
      c: iPhone
    d: Nothing. He tells about the gun to his mother instead.  \n`,
          answer: "c"
  }];

  for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i];
  quiz(currentQuestion.question,currentQuestion.answer);
}

log(chalk.bold.green("Your total score is : "+ finalScore));
console.log("*******************");

log(chalk.italic.yellow("Check out the score board "));

for(var i=0;i<highScore.length;i++)
{
  var currentPerson=highScore[i];
  console.log(currentPerson.name + " " + currentPerson.score);
}
