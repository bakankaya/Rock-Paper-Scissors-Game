/* ROCK PAPER SCISSORS Game
Trying the odin project guide
*/

// A function that randomly chooses within options

function getComputerChoice(){
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let compchoice = choices[(Math.floor(Math.random() * choices.length))];
    return compchoice;
}

// Getting Input from user (Removed from function also!)
/*
function getPlayerChoice(){
    let playerchoice = prompt("ROCK, PAPER or SCISSORS?" ).toLowerCase();
    if (playerchoice == "ROCK"||playerchoice == "PAPER" ||playerchoice == "SCISSORS"){
        return playerchoice;
    } else {
    return "I didn't understand that, try again";
    }
}
*/
function zort(){
    const qe = document.querySelectorAll('img.que');
    for( const q of qe){
        q.classList.add('pick');
        setTimeout(zort2,2000);
    }
}
function zort2(){
    const qe = document.querySelectorAll('img.que');
    for( const q of qe){
        q.classList.remove('pick');
    }
}

// Adding Event Listener
const buttons = document.querySelectorAll('.selections');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener, choosing from player and calling the game
  button.addEventListener('click', () => {  //!!!Probably I need another eventlistener to get the timing right!!!
    playerchoice = button.id;
    if (playerchoice == 'ROCK'){
        document.getElementById('plyrque').src="sources/icons8-rock-100.png";
        zort();
    } else if (playerchoice == 'PAPER'){
        document.getElementById('plyrque').src="sources/icons8-paper-100.png";
        zort();
    } else if (playerchoice == 'SCISSORS'){
        document.getElementById('plyrque').src="sources/icons8-barber-scissors-100.png";
        zort();
    }
    document.getElementById('scorepy').textContent = playerscore;
    document.getElementById('scorepc').textContent = compscore;
    document.getElementById('prompt').textContent = playRound();
    counter();
  });
});

let compscore = 0;
let playerscore = 0;

// Comparing computer and user and deciding on winner
function playRound(){

    var compchoice = getComputerChoice();
    if (playerchoice == compchoice){
        return "It's a tie!";
    } else if (playerchoice=="ROCK" && compchoice=="PAPER"){
        compscore++;
        return "PAPER beats ROCK!";
    } else if (playerchoice=="ROCK"& compchoice=="SCISSORS"){
        playerscore++;
        return "ROCK beats SCISSORS!";

    } else if (playerchoice=="PAPER"& compchoice=="SCISSORS"){
        compscore++;
        return "SCISSORS beats PAPER!";
    } else if (playerchoice=="PAPER"& compchoice=="ROCK"){
        playerscore++;
        return "PAPER beats ROCK!";
        
    } else if (playerchoice=="SCISSORS"& compchoice=="PAPER"){
        playerscore++;
        return "SCISSORS beats PAPER!";  
    } else if (playerchoice=="SCISSORS"& compchoice=="ROCK"){
        compscore++;
        return "ROCK beats SCISSORS!";
    }
}
// run it five times
/*
function game(){
    let compscore;
    let playerscore;
    for (let i = 0; i < 5; i++) {
        let result = playRound()
        if (result.search('lose!') > -1){
            compscore++;
        } else if (result.search('win!') > -1) {
            playerscore++;
        }
     }
   if (playerscore > compscore){
    return 'you Win!';
}   else {
    return 'you Lost!';
}
}
*/

function counter(){
    if (playerscore == 5){
    alert('You Win!');
    playerscore = 0;
    compscore = 0;
}   else if (compscore == 5) {
    alert('You Lost!');
    playerscore = 0;
    compscore = 0;
}
};