import {
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    selectForest,
    selectRain,
    selectFire,
    selectShop,
    buttonPressAudioForest,
    buttonPressAudioRain,
    buttonPressAudioFire,
    buttonPressAudioShop
}  from "./elements.js"

export default function Timer(){

    let timerTimeOut;
    let minutes = Number(minutesDisplay.textContent);
    
    function countDown(){
        timerTimeOut = setTimeout(function(){
            let seconds = Number(secondsDisplay.textContent);
            let minutes = Number(minutesDisplay.textContent);

            updateTimerDisplay(minutes,0);

            if(minutes == 0 && seconds == 0){
                resetTimer();
                return
            }
    
            if(seconds <= 0){
                seconds = 60;
                --minutes;
            } 

            updateTimerDisplay(minutes,String(seconds-1));
    
            countDown();
        },1000);
    }

    function resetTimer(){
        updateTimerDisplay(minutes,0);
        clearTimeout(timerTimeOut);

        //essa funcao reseta o timer chamando uma funcao para isso
    }

    function updateTimerDisplay(minutes,seconds){
        minutesDisplay.textContent = String(minutes).padStart(2,"0");
        secondsDisplay.textContent = String(seconds).padStart(2,"0");


        //essa funcao altera o conteudo do html com o .textcontent
    }

    function stopOn(){
        resetTimer();
    }

    function setMinutesPlus(){
        let newMinutes = minutes + 5;
        updateTimerDisplay(newMinutes,0);
        updateMinutes(newMinutes);
    }

    function setMinutesMinus(){
        let newMinutes = minutes - 5;
        updateTimerDisplay(newMinutes,0);
        updateMinutes(newMinutes);
    }

    function updateMinutes(newMinutes){
        minutes = newMinutes
    }


    return{
        countDown,
        stopOn,
        setMinutesPlus,
        setMinutesMinus
    }
}


