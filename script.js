const game = () => {
  let pscore = 0;
  let cscore =0;
  
  const startGame = () =>{
    const playBtn = document.querySelector('.intro button');
    const introScreen=document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener("click",() => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };
  const playMatch = () =>{
    const options = document.querySelectorAll('.options button')
    const playerHand = document.querySelector('.phand');
    const computerHand = document.querySelector('.chand');
    const hands= document.querySelectorAll('.hand img');
    hands.forEach(hand =>{
      hand.addEventListener("animationend",function(){
        this.style.animation = "";
      });
      
    })
    const computerOptions=['rock','paper','scissors'];
    options.forEach(option => {
      option.addEventListener('click',function(){
    const computerNumber= Math.floor(Math.random()*3);
    const computerChoice= computerOptions[computerNumber];
            setTimeout(()=>{
                compareHand(this.innerText,computerChoice);

        computerHand.src=`./assets/${computerChoice}.png` ;
        playerHand.src=`./assets/${this.innerText}.png`;

            }, 2000);
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
    
  };
  const updateScore= ()=>{
   const playerScore= document.querySelector(".pscore p");
const computerScore= document.querySelector(".cscore p")
computerScore.innerText= cscore;
    playerScore.innerText=pscore;
  };
  const compareHand= (playerChoice, computerChoice)=>{
    const winner = document.querySelector('.winner')
    if(playerChoice===computerChoice){
      winner.textContent="Tie";
      pscore++;
cscore++;
updateScore();

      return;
    }
    if(playerChoice==="rock"){
      if(computerChoice==="scissors"){
        winner.textContent="You WIN <3";
        pscore++;        
        updateScore();
        return;
      }
      else{
        winner.textContent="You LOOSE :(";
cscore++;
        
updateScore();
      return;
      }
    }
        if(playerChoice==="paper"){
      if(computerChoice==="rock"){
        winner.textContent="You WIN <3";
pscore++
updateScore();
        return;
      }
      else{
        winner.textContent="You LOOSE :(";
        cscore++;     
        updateScore();
        return;
      }
    }
      if(playerChoice==="scissors"){
      if(computerChoice==="paper"){
        winner.textContent="You WIN !!!!!";
pscore++;
        updateScore();

        return;
      }
      else{
        winner.textContent="You LOOSE :( ";
        cscore++;
        updateScore();
        return;
      }
    }
  }
  startGame();
 playMatch();
};
game();