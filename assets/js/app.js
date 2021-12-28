
let secret = Math.random();
secret = secret * 100;
secret = Math.floor(secret) + 1; 
let numberAttempts = 10;
let flag = false;

//console.log(`Secret =  ${secret}`);

function calc() {
    if (flag) {
        return;
    }
    
    let numberInput = +numberInputOne.value;
    let resultText;
    //console.log(`numberAttempts =  ${numberAttempts}`);

    if ((numberAttempts > 1) && (numberInput !=secret ) && (numberInput > secret)){
        numberAttempts--;
        resultText = `НЕ-А!! Число ${numberInput} больше задуманного`;
    }else if((numberAttempts > 1)  && (numberInput !=secret ) && (numberInput < secret)){
        numberAttempts--;
        resultText = `НЕ-А!! Число ${numberInput} меньше задуманного`;
    }else if( ((numberAttempts == 1)) || (numberAttempts == 0) ){
        numberAttempts = 0;
        flag = true;
        resultText = `Игра окончена!!! У вас закончились попытки`;
        
    }else if((numberAttempts >= 0) && (numberInput == secret )){
        resultText = `УРААА!!! Вы победил`;
        numberAttempts = " ";
        flag = true;
        
        
    }
    outputText.innerHTML = resultText;
    resultAttempts.innerHTML = numberAttempts;
    
}



