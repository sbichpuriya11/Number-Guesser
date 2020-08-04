//Same part as that of Brad
let min = 1, max = 10, winningNum = 2, guessesLeft = 3;

const game = document.getElementById('game'),
minNum = document.querySelector('.min-num'),
maxNum = document.querySelector('.max-num'),
guessBtn = document.querySelector('#guess-btn'),
guessInput = document.querySelector('#guess-input'),
message = document.querySelector('.message');



//Assign UI min and max


guessGenerator = ((Math.floor(Math.random()*(max-min+1))+min));
minNum.textContent = min;
maxNum.textContent = max;



guessBtn.addEventListener('click',function(event){
    
    //prevent submit from it's default functionality
    event.preventDefault();

    //converting the input float value to the integer
    let guessing = parseInt(guessInput.value);
    

    //Validate if number is in range
    if(isNaN(guessing)|| guessing<min || guessing>max)
        {
            showMessage(`Please enter number between ${min} and ${max}. You have total ${guessesLeft} guesses   `,'red');
        }
    
    else{

        guessesLeft -= 1;
        //Check the condition for winning
        if(guessing == guessGenerator)
            {
                showMessage(`Congratulations! You won. Correct answer was ${guessGenerator}`,'green');
                guessBtn.value = 'Play Again! ';
                guessInput.disabled=true;
                document.getElementById('guess-btn').addEventListener('click',function(){
                    window.location.reload();
                });                
            }

        //condition to reveal the answer when no guesses left    
        else if(guessesLeft==0)
            {
                showMessage(`Sorry! You Loose. Correct number was ${guessGenerator}`,'red');
                guessBtn.value = 'Play Again! ';
                guessInput.disabled=true;
                document.getElementById('guess-btn').addEventListener('click',function(){
                    window.location.reload();
                });                
            }
        else{
            
            showMessage(`${guessing} is not correct! You have only ${guessesLeft} guesses left`,'red');
         
        }
        
    }
    
    




    
});


function showMessage(msg,col){

    
    message.style.color = col;
    message.textContent = msg;
    document.querySelector('#guess-input').style.borderColor = col;


}
