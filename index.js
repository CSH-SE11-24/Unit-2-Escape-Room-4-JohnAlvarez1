const prompt = require('prompt-sync')()

let age = prompt("What's your age?")
parseInt(age)
if(age === 18){
  console.log("You can vote!")
}else if(age < 18){
  console.log("You can't vote:(")
}


let guess = prompt("Password: ")

while(guess !== "SE11"){
 guess = prompt("try again")
}
