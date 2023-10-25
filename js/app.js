const choices = ['rock', 'paper', 'scissors'];
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let whoWonDiv = document.querySelector(".whowon");
let userSpan = document.querySelector("#you_count");
let comSpan = document.querySelector("#com_count");
let resetbutton = document.querySelector("button");

function computerChoice(){
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function usrWon(){
    whoWonDiv.innerText = "You won!";
    userScore++;
    userSpan.innerText = userScore;
}
function comWon(){
    whoWonDiv.innerText = "You Lost!";
    comScore++;
    comSpan.innerText = comScore;
}



let whoWon = (usr,com) => {
    if (com === usr){
        whoWonDiv.innerText = "It's a tie!";
    }else if((com === choices[0] && usr  === choices[1])||(com === choices[1] && usr  === choices[2])||(com === choices[2] && usr  === choices[0])){
        usrWon();
    }else{
        comWon();
    }
}

let userChoice;
let comChoice;
let userScore = 0;
let comScore = 0;
rock.addEventListener("click",()=>{
    userChoice = choices[0];
    comChoice = computerChoice();
    whoWon(userChoice,comChoice);
    alert(`You choose [${userChoice}] & Computer choose [${comChoice}]`);
})
paper.addEventListener("click",()=>{
    userChoice = choices[1];
    comChoice = computerChoice();
    whoWon(userChoice,comChoice);
    alert(`You choose [${userChoice}] & Computer choose [${comChoice}]`);
})
scissor.addEventListener("click",()=>{
    userChoice = choices[2];
    comChoice = computerChoice();
    whoWon(userChoice,comChoice);
    alert(`You choose [${userChoice}] & Computer choose [${comChoice}]`);
})
resetbutton.addEventListener("click",()=>{
    whoWonDiv.innerText = "";
    userSpan.innerText = 0;
    comSpan.innerText = 0;
})


