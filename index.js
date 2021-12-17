var readlineSync = require('readline-sync')
var chalk = require('chalk');
var  userScore = 0;
console.log(chalk.bgRed.underline.bold('WELCOME TO THE ULTIMATE ONE-PIECE QUIZ!'));
var userName = readlineSync.question('Please, ENTER your' + chalk.red(' PIRATE NAME ') + ':')
console.log(chalk.yellowBright('welcome '+ userName + ' !' ))
console.log(chalk.blue('Please, read the instructions carefully!'))
console.log(chalk.redBright('1. ' + 'this quiz comprises of 10 questions. '))
console.log(chalk.redBright('2. ' + 'you will be rewarded 1 million berries for every correct answer. '))
console.log(chalk.redBright('3. ' + 'there is no deduction for wrong answer.'))
console.log(chalk.redBright('4. ' + chalk.bgMagenta('You only need to enter the option number for responding!')))
console.log('_________________________________________________________________')
console.log('_________________________________________________________________')
console.log(chalk.red('LETS GOOOOOO!'))

var quizOne = 
{
  question: 'Q1. who is the author of manga one piece?',
  option: ['Eiichiro Oda','Hajime Isayama','Masashi Kishimoto','Koyoharu Gotouge'],
  answer: 'Eiichiro Oda'
}
 var quizTwo = 
{
  question: 'Q2. who gave the straw hat to luffy?',
  option: ['garp','ace','shanks','zoro'],
  answer: 'shanks'
}
var quizThree = 
{
  question: 'Q3. what was the name of Straw Hat pirates first ship?',
  option: ['thousand sunny','oro jackson','going merry','moby dick'],
  answer: 'going merry'
}
var quizFour = 
{
  question: 'Q4. name the warlord behind criminal organisation Baroque Works that wanted to take over the kingdom of Arabasta ',
  option: ['dracule mihawk','sir crocodile','buggy','doflamingo'],
  answer: 'sir crocodile'
}
 var quizFive = 
{
  question: 'Q5. who ended the Summit War of Marineford?',
  option: ['law','jimbei','shanks','rayleigh'],
  answer: 'shanks'
}
var quizSix = 
{
  question: 'Q6. Silver rayleigh, first mate of Rogers crew is aslo called?',
  option: ['pirate king','strongest creature in the world','Dark King','Surgeon of Death'],
  answer: 'Dark King'
}
var quizSeven = 
{
  question: 'Q7. What is/are the names of ancient weapons in one piece?',
  option: ['Poseidon','Pluton','Uranus','all of the above'],
  answer: 'all of the above'
}
 var quizEight = 
{
  question: 'Q8. the only fishman member of straw hats pirates, earlier served under ',
  option: ['kaido','big mom','blackbeard','shanks'],
  answer: 'big mom'
}
var quizNine = 
{
  question: 'Q9. luffy defeated katakuri using which form?',
  option: ['gear 3rd','gear 2nd + armanent haki','snakeman','bounceman'],
  answer: 'snakeman'
}
var quizTen = 
{
  question: 'Q10. name the Odens sword which was later passed to zoro',
  option: ['Enma','Shusui','Kitetsu','Yubashiri'],
  answer: 'Enma'
}

function play(question,optionArr,answer)
{
 
  var index = readlineSync.keyInSelect(optionArr,chalk.bgGrey(question))
  var userAnswer = optionArr[index];
  if (userAnswer === answer) 
  {
    console.log(chalk.green('you are right!'))
     userScore =  userScore + 1;
  }
  else 
  {
    console.log(chalk.red('you are wrong!'))
    console.log('correct answer is ' + chalk.green(answer))
  }
  console.log(chalk.cyanBright('your bounty is: ' + chalk.magentaBright( userScore + ' million berries')))
  console.log(chalk.yellow('*****************************************************'))
}
var quizArr = [quizOne,quizTwo,quizThree,quizFour,quizFive,quizSix,quizSeven,quizEight,quizNine,quizTen]

for ( var i = 0; i < quizArr.length; i++)
{
  play(quizArr[i].question ,quizArr[i].option ,quizArr[i].answer)

}
console.log(chalk.grey('_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_'))
console.log(chalk.magenta(chalk.bgBlue('your final bounty is: ' + userScore + ' million berries!')))

var highestScorer = 
{
  name:'mayank',
  score: 9
}
var newPlayer = 
{
  name: userName ,
  score: userScore
}


if (newPlayer.score >= highestScorer.score) 
  {
    console.log(chalk.red('Congratulations! ' + userName + ' for the new highest bounty'))
    console.log(chalk.yellow('please send a screenshot of your score to me @ mayankksachdev'))
  }
  else 
  {
    console.log(chalk.red('highest bounty is: ' + highestScorer.score + ' million berries'))
    console.log(chalk.bgYellow('better luck next time!'))
  }
