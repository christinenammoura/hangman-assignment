

var words = ["JAVASCRIPT", "HTML", "CSS", "PROGRAMMING", "DEVELOPER", "FUNCTION", "VARIABLE", "OBJECT"];


var selectedWord = ""; 
var guessedLetters = []; 
var wrongGuesses = 0; 
var maxWrongGuesses = 6; 


function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)]; 
    guessedLetters = []; 
    wrongGuesses = 0; 
    updateDisplay(); 
}

function addLetterClickListeners() {
    
    var letterDivs = document.querySelectorAll('.letter');

    
    for (var i = 0; i < letterDivs.length; i++) {
        
        letterDivs[i].addEventListener('click', function() {
            
            var clickedLetter = this.textContent; 
            
            
            handleLetterClick(clickedLetter);
        });
    }
}
addLetterClickListeners();

function initGame() {
    startGame(); 
}


initGame();