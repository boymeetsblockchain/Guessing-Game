// getting game parameters
let min=1
let max=10
let  winningNum=3
winningNum=Math.floor(((Math.random)*10)+1);
 let   guessesLeft =3;
    // getting ui varaibles
    const guessInput=document.querySelector('.guess-input');
    const minNum=document.querySelector('.min');
    const maxNum=document.querySelector('.max').textContent=10;
    const guessBtn=document.querySelector('.guess-btn');
    const guesses=document.querySelector('.guessLeft');
    const message = document.querySelector('.message');
           
         minNum.textContent=min;
         maxNum.textContent=max;
         guessBtn.addEventListener('click',function(e){
           let guess = parseInt(guessInput.value);
           if(isNaN(guess)||guess>max||guess<min){
            setMessage(`please enter a number between ${min} and ${max}`, 'red')
            guessInput.style.borderColor='red';
           }
           
           if(guess === winningNum){
            setMessage('you won!!','green')
            guessInput.style.borderColor='green';
           }else{
             guessesLeft -= 1;
             if(guessesLeft === 0){
              setMessage('you lost!!','grey')
              guessInput.disabled= true;
              guessBtn.textContent = 'Try again';
              
             }else{
              guessInput.style.borderColor = 'red';setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
              }
           } 
          
          e.preventDefault();
         });
         function setMessage(msg,style){
          message.textContent=msg;
          message.style.color=style;
         }