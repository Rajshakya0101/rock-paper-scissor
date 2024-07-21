let paper = document.querySelector('#paper');
let rock = document.querySelector('#rock');
let scissor = document.querySelector('#scissor');
let my_choice = document.querySelector('#my-choice');
let com_choice = document.querySelector('#com-choice');
let win_msg = document.querySelector('.msg');
let my_score = document.querySelector('#my-score');
let com_score = document.querySelector('#com-score');
let new_game = document.querySelector('.new-game');

let myScore = 0;
let comScore = 0;

let match_draw = new Audio('media/match_draw.mp3');
let win_sound = new Audio('media/sinister-laugh-140131.mp3');
let lost_sound = new Audio('media/aayein-made-with-Voicemod.mp3');

// Define the choices and their corresponding image sources
const choices = {
    paper: "media/paper.png",
    rock: "media/rock.png",
    scissors: "media/scissors.png"
};

// Function to get a random choice for the computer
function getRandomChoice() {
    const keys = Object.keys(choices);
    console.log(keys);
    return keys[Math.floor(Math.random() * keys.length)];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        win_sound.pause();
        lost_sound.pause();
        match_draw.play();
        return "It's a tie!";
    }
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        myScore += 1;
        console.log(myScore);
        match_draw.pause();
        lost_sound.pause();
        win_sound.play();
        my_score.innerText = myScore;
        return "You win!";
    }
    comScore += 1;
    console.log(comScore);
    match_draw.pause();
    win_sound.pause();
    lost_sound.play();
    com_score.innerText = comScore;
    return "Computer wins!";
}

// Event listeners for player choices
paper.addEventListener("click", () => {
    my_choice.src = choices.paper;
    const computerSelection = getRandomChoice();
    // console.log(computerSelection);
    com_choice.src = choices[computerSelection];
    win_msg.textContent = determineWinner('paper', computerSelection);
});

rock.addEventListener("click", () => {
    my_choice.src = choices.rock;
    const computerSelection = getRandomChoice();
    com_choice.src = choices[computerSelection];
    win_msg.textContent = determineWinner('rock', computerSelection);
});

scissor.addEventListener("click", () => {
    my_choice.src = choices.scissors;
    const computerSelection = getRandomChoice();
    com_choice.src = choices[computerSelection];
    win_msg.textContent = determineWinner('scissors', computerSelection);
});

new_game.addEventListener("click", () => {
    location.reload();
})
