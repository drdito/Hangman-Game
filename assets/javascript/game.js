var possibleWords = ["kylo ren", "han solo", "death star","darth vader", "luke skywalker", "tataouine", "lightsaber", "yoda", "stormtrooper", "ewoks", "the dark side"];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessedLetters = [];

var wins = 0;

var guessesRemaining = 12;

var randomWord  = selectRandomWord();

var letterFill= "b";

var winCondition=0;

var wins = 0;








//Function to pick a random word for the Game//

function selectRandomWord() {

   var random = Math.floor(Math.random() * possibleWords.length);
   var randomWord = possibleWords[random];

   return randomWord;

   

}

//function to fill array of guessed letters (but not if they are a repeat), also does nothing if non-letter is picked

function fillGuessedLetters() {

	  var indexTwo = alphabet.indexOf(event.key);
    var index = guessedLetters.indexOf(event.key);

    if (index === -1 && indexTwo !== -1) {
    	
      guessedLetters.push(event.key);
    	
    	guessesRemaining--;
    	
    }

    else {
    	null;
    }

	
}




function checker() {

  for (var x = 0; x < randomWord.length; x++) {

    if (randomWord.charAt(x) === event.key) {
      document.getElementById("letter" + x).style.visibility = "visible";
      winCondition++;

    }

   


  }
}

 
window.onload = function fillBlanks() {
  
  
  
  for (var i = 0; i < randomWord.length; i++) {

    if (randomWord.charAt(i) !== " ") {
      document.getElementById("underline" + i).style.visibility = "visible";
    }

    else if (randomWord.charAt(i) === " ") {
      winCondition++;
    }  
    letterFill = randomWord.charAt(i);

    document.getElementById("letter" + i).innerHTML = letterFill;

    }
}



function reset() {


  location.reload ();

  


}














selectRandomWord();

document.onkeyup = function(event) {

  document.getElementById('audiotag1').play();
  console.log(wins);
  fillGuessedLetters();
  checker();

  document.getElementById("guessedLettersString").innerHTML = "Letters Guessed: " + guessedLetters;
  document.getElementById("guesses").innerHTML = "Guesses Remaining: " + guessesRemaining;

  if (winCondition >= randomWord.length && guessesRemaining > 0) {

    document.getElementById("guesses").innerHTML = "You Win!!!";
    document.getElementById("reset").innerHTML = "Press [Space] to play again!"
    
  }

  if (guessesRemaining === 0) {
    document.getElementById('audiotag1').pause();
    document.getElementById('audiotag2').play();
  }

  if (guessesRemaining <=0) {
    
    document.getElementById("guesses").innerHTML = "You lose, but keep guessing till you get it!";
    document.getElementById("reset").innerHTML = "Press [Space] to try again!"
  }

  if (event.keyCode === 32) {
    reset();
  }

   
    
    
  

  

 



}
 












