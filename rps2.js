// Variables

let compscore = 0;
let playerscore = 0;

// A function that randomly chooses within options

function getComputerChoice(){
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let compchoice = choices[(Math.floor(Math.random() * choices.length))];
    return compchoice;
}
// The function to keep score
function counter(){
    if (playerscore == 5){
        alert('You Win!');
        playerscore = 0;
        compscore = 0;
    } else if (compscore == 5) {
        alert('You Lost!');
        playerscore = 0;
        compscore = 0;
    }
};
