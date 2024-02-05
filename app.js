let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const compChoice = options[Math.floor(Math.random()*3)];
    return compChoice;
}

const drawGame = ()=>{
    msg.innerText = ("Game was Draw! Play Again.");
    msg.style.backgroundColor = "#041F1E";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win :) Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost :/  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame =(userChoice)=>{
    // console.log("User choice is "+userChoice);
    //generate computer choice...
    const compChoice = genCompChoice();
    // console.log("Computer choice is "+compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
       let userWin = true;
       if(userChoice==="rock"){
        //paper,scissor... rock would have been then it automatically draws.
        userWin = compChoice==="paper"?false:true;
       } 
       else if(userChoice==="paper"){
        //rock,scissor...
        userWin = compChoice==="scissors"?false:true;
       }
       else{
        //rock,paper...
        userWin = compChoice==="paper"?true:false;
       }
       showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked =>",userChoice);
        playGame(userChoice);
    })
})
