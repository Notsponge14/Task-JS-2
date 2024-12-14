const secretNumber= 7;

const userGuess= 4;

if (userGuess < 1 || userGuess > 10) {
  console.log("Please guess number beetwen 1 to 10")
}

else if(userGuess === secretNumber){
  console.log("You guessed it right!")
}

else if(userGuess > secretNumber){
  console.log("Too high try more lower!")
}

else if(userGuess < secretNumber){
  console.log("Too low try more higher!")
}