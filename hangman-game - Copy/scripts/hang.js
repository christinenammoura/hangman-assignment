

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




function updateHangman() {
    var hang = document.getElementById("hang");
    
    var parts = [
        { file: "head", className: "head" },
        { file: "body", className: "body" },
        { file: "left-hand", className: "left-hand" },
        { file: "right-hand", className: "right-hand" },
        { file: "left-leg", className: "left-leg" },
        { file: "right-leg", className: "right-leg" }
    ];

    
    for (var i = 0; i < wrongGuesses && i < parts.length; i++) {
        var img = document.createElement("img");
        img.src = `./assets/${parts[i].file}.svg`;
        img.className = `stand ${parts[i].className}`; 
        hang.appendChild(img); 
    }
}





function handleLetterClick(letter) {
    
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter); 

        
        if (!selectedWord.includes(letter)) {
            wrongGuesses++; 

            
            if (wrongGuesses >= maxWrongGuesses) {
                
                alert("Game Over! The word was \"" + selectedWord + "\".");
                startGame(); 
            }
        }

        
        updateDisplay(); 
    }
}


startGame();





 


