

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




function updateDisplay() {
    
    var answerSection = document.getElementById("answer-section");
    answerSection.innerHTML = ""; 

    
    var displayWord = "";

    
    for (var i = 0; i < selectedWord.length; i++) {
        var letter = selectedWord[i];
        
        
        if (guessedLetters.includes(letter)) {
            displayWord += letter + " ";
        } else {
            
            displayWord += "_ ";
        }
    }

    
    answerSection.textContent = displayWord.trim();

    
    if (displayWord.replace(/ /g, '') === selectedWord) {
        alert("Congratulations! You've guessed the word!");
        startGame(); 
    }

    
    updateHangman();
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







