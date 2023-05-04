// Variables

let compscore = 0;
let playerscore = 0;
let buttons = document.querySelectorAll('.selections');
let win = document.querySelector("[data-claimer-win");
let lose = document.querySelector("[data-claimer-lose");
let overlay = document.querySelector("[data-overlay");

// A function that randomly chooses within options

function getComputerChoice(){
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let compchoice = choices[(Math.floor(Math.random() * choices.length))];
    if (compchoice == 'ROCK'){
        document.getElementById('compque').src="sources/icons8-rock-100.png";
    } else if (compchoice == 'PAPER'){
        document.getElementById('compque').src="sources/icons8-paper-100.png";
    } else if (compchoice == 'SCISSORS'){
        document.getElementById('compque').src="sources/icons8-barber-scissors-100.png";
    }
    return compchoice;
}  
    
// The function to keep score

function counter(){
    document.getElementById('scorepy').textContent = playerscore;
    document.getElementById('scorepc').textContent = compscore;
    if (playerscore == 5){
        win.classList.add('open');
        overlay.classList.add('open');
    } else if (compscore == 5) {
        lose.classList.add('open');
        overlay.classList.add('open');
    }
};


function animation(){
    document.getElementById('compque').src ="sources/icons8-question-mark-64.png";
    document.getElementById('prompt').textContent ="???";
    document.getElementById('prompt').style.color= "#4b4b4b";
    const qe = document.querySelectorAll('img.que');
    for( const q of qe){
        q.classList.add('pick');
        q.onanimationend = () =>{
            q.classList.remove('pick');
        };
    }
}

function playRound(){
    var compchoice = getComputerChoice();
    if (playerchoice == compchoice){
        document.getElementById('prompt').textContent= "It's a tie!";
    } else if (playerchoice=="ROCK" && compchoice=="PAPER"){
        compscore++;
        document.getElementById('prompt').textContent= "PAPER beats ROCK!";
        document.getElementById('prompt').style.color= "#800";
    } else if (playerchoice=="ROCK" && compchoice=="SCISSORS"){
        playerscore++;
        document.getElementById('prompt').textContent= "ROCK beats SCISSORS!";
        document.getElementById('prompt').style.color= "#0c8081";

    } else if (playerchoice=="PAPER" && compchoice=="SCISSORS"){
        compscore++;
        document.getElementById('prompt').textContent= "SCISSORS beats PAPER!";
        document.getElementById('prompt').style.color= "#800";
    } else if (playerchoice=="PAPER" && compchoice=="ROCK"){
        playerscore++;
        document.getElementById('prompt').textContent= "PAPER beats ROCK!";
        document.getElementById('prompt').style.color= "#0c8081";
        
    } else if (playerchoice=="SCISSORS" && compchoice=="PAPER"){
        playerscore++;
        document.getElementById('prompt').textContent= "SCISSORS beats PAPER!";
        document.getElementById('prompt').style.color= "#0c8081";  
    } else if (playerchoice=="SCISSORS" && compchoice=="ROCK"){
        compscore++;
        document.getElementById('prompt').textContent= "ROCK beats SCISSORS!";
        document.getElementById('prompt').style.color= "#800";
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {  
      playerchoice = button.id;
      if (playerchoice == 'ROCK'){
          document.getElementById('plyrque').src="sources/icons8-rock-100.png";
          animation();
      } else if (playerchoice == 'PAPER'){
          document.getElementById('plyrque').src="sources/icons8-paper-100.png";
          animation();
      } else if (playerchoice == 'SCISSORS'){
          document.getElementById('plyrque').src="sources/icons8-barber-scissors-100.png";
          animation();
      }

    setTimeout(playRound,1500);
    setTimeout(counter,2000);
    });
});
