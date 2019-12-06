/*
GAME RULES

1. THE GAME HAS 2 PLAYERS PLAING IN ROUNDS
2. IN EACH TURN, A PLAYER ROLLS A DICE AS MANY TIMES AS HE WHISHES. EACH RESULT GET ADDED TO HIS ROUND
3.BUT, IF THE PLAYER ROLLS A 1 ALL HIS ROUND SCORE GETS LOST. AFTER THAT IT'S THE NEXT PLAYER'S TURN THAT, IT'S THE NEXT PLAYER'S TURN
4. THE FIRST PLAYER TO REACH 100 POINTS ON GLOBAL SCORE WINS THE GAME

*/




//1 First we should declared our fundamental varibalse this var will track our changes 
// каждому приложению нужны переменые они отслеживают измение 
var score, roundScore, activePlayer;

score = 0;
roundScore = 0;
activePlayer = 0;

// DOM elements
var btn_roll = document.querySelector(`.btn-roll`);
var dice1 = document.querySelector(`.dice`);
var score0 = document.getElementById(`score-0`).textContent = 0;
var score1 = document.getElementById(`score-1`).textContent = 0;
var current0 = document.getElementById(`current-0`).textContent = 0;
var current1 = document.getElementById(`current-1`).textContent = 0;




document.querySelector('.dice').style.display = 'none';

btn_roll.addEventListener('click', function() {
    //1. we need random number for our dice
    // this line allows us to get randow number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display result
    dice1.style.display = 'block';
    dice1.src = `dice-${dice}.png`;

    //3.update rounded score if dice not a 1
    if(dice !== 1) {
        roundScore += dice  // roundScore = dice + roundscore
        document.querySelector(`#current-${activePlayer}`).textContent = roundScore;

    } else {
        nextPlayer();
    }
})





















//3. choice all dom element
// var player0 = document.querySelector(`#name-0`);
// var player1 = document.querySelector(`#name-1`);
// 
// var new_game = document.querySelector(`.btn-new`);
// var btn_hold = document.querySelector(`.btn-hold`);
// var dice2 = document.querySelector(`.dice2`);






















/* theory of this project */

// function btn() {
//     //Do something
// }

// btn_roll.addEventListener('click', btn) this btn calls callback function because this function which include into other function that is not call by us but onther function это называеться callback функуция потому что она находиться в другой функций как аргумент и мы эту функию не вызываем самостоятельно это функция вызываеться другой функцией

// btn_roll.addEventListener('click', function() {}) this call anonymous function because this function does not have a name and it can not be reused again это называеться анонимная функция потомучто она не имет именя и неможет быть использовано повторно