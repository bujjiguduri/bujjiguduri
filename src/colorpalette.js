var correctColor;
var gameActive = true;

function generateRandomRGBColor() {
    var randomRed = Math.floor(Math.random() * 256);
    var randomGreen = Math.floor(Math.random() * 256);
    var randomBlue = Math.floor(Math.random() * 256);
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

function generateRandomButtons() {
    var buttonsContainer = document.getElementById('buttons');
    var correctIndex = Math.floor(Math.random() * 5); // Randomly select one button to be correct
    for (var i = 0; i < 5; i++) {
        var button = document.createElement('button');
        button.className = 'color-button';
        if (i === correctIndex) {
            button.style.backgroundColor = correctColor;
        } else {
            button.style.backgroundColor = generateRandomRGBColor();
        }
        button.onclick = function() {
            if (gameActive) {
                var buttonColor = this.style.backgroundColor;
                if (buttonColor === correctColor) {
                    document.getElementById('result').innerText = 'Correct! Well done!';
                    gameActive = false;
                } else {
                    document.getElementById('result').innerText = 'Incorrect. Try again.';
                }
            }
        };
        buttonsContainer.appendChild(button);
    }
}

function resetGame() {
    document.getElementById('buttons').innerHTML = '';
    correctColor = generateRandomRGBColor();
    document.getElementById('guessInput').value = correctColor;
    gameActive = true;
    generateRandomButtons();
    document.getElementById('result').innerText = '';
}

correctColor = generateRandomRGBColor();
document.getElementById('guessInput').value = correctColor;
generateRandomButtons();