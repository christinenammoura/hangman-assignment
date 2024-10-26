

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



function updateHangman() {
    var hang = document.getElementById("hang");
    hang.innerHTML = ""; 

    
    if (wrongGuesses >= 1) hang.innerHTML += `<img src="./assets/head.svg" />`;
    if (wrongGuesses >= 2) hang.innerHTML += `<img src="./assets/body.svg" />`;
    if (wrongGuesses >= 3) hang.innerHTML += `<img src="./assets/left-hand.svg" />`;
    if (wrongGuesses >= 4) hang.innerHTML += `<img src="./assets/right-hand.svg" />`;
    if (wrongGuesses >= 5) hang.innerHTML += `<img src="./assets/left-leg.svg" />`;
    if (wrongGuesses >= 6) hang.innerHTML += `<img src="./assets/right-leg.svg" />`;
}


