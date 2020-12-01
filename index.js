var readlineSync = require("readline-sync");
var score = 0;
console.log("How well do you know Uday?")
var list = [
  questionOne ={ 
    question: "What is his nickname?",
    answer : "laddu",

  },
  questionTwo ={
    question : "Where does he stay?" ,
    answer: "hyderabad",
  }
];

for ( var i=0; i < list.length; i++){
  play(list[i].question, list[i].answer);
}


function play(question, answer){
 var userAnswer = readlineSync.question(question);
 console.log("You answered "+ userAnswer);

 if (userAnswer === answer){
   console.log("You are right!");
   score++;
} else {
  console.log("You are wrong!");
}
 console.log("Score is " + score);
}

console.log("Your total score is " + score);
