const randomIndex = Math.floor(Math.random()*3);
const choice =["rock","paper","scissors"];
const comChoice = choice[randomIndex];

const userChoice = prompt("Please type rock, paper or scissors")

if ((userChoice ==="rock" && comChoice==="scissors")||
    (userChoice==="paper" && comChoice==="rock")||
    (userChoice==="scissors" && comChoice==="paper")){
    alert("User chose "+userChoice+". Computer chose "+comChoice+". You Won!!")}
else if(userChoice===comChoice){
    alert("User chose "+userChoice+". Computer chose "+comChoice+". Tie!!")}
else{
    alert("User chose "+userChoice+". Computer chose "+comChoice+". You Lost!!")
}