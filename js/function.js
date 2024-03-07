document.addEventListener('DOMContentLoaded', function () {
    const diceElement = document.getElementById('dice');
    const resultElement = document.getElementById('result');

    diceElement.addEventListener('click', rollDice);

    function rollDice() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        const imageUrl = `./img/${randomNumber}.png`;
        diceElement.innerHTML = `<img src="${imageUrl}" alt="dice" />`;
        resultElement.textContent = `Nopan silmäluku: ${randomNumber}`;
    }
});
