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

export default function Sounds({buttonPressAudioForest,buttonPressAudioRain,buttonPressAudioFire,buttonPressAudioShop}){

    function pressButtonForest(){
        buttonPressAudioForest.play();
        buttonPressAudioRain.pause();
        buttonPressAudioFire.pause();
        buttonPressAudioShop.pause();
    }
    
    function pressButtonRain(){
        buttonPressAudioForest.pause();
        buttonPressAudioRain.play();
        buttonPressAudioFire.pause();
        buttonPressAudioShop.pause();
    }
    
    function pressButtonFire(){
        buttonPressAudioForest.pause();
        buttonPressAudioRain.pause();
        buttonPressAudioFire.play();
        buttonPressAudioShop.pause();
    }
    
    function pressButtonShop(){
        buttonPressAudioForest.pause();
        buttonPressAudioRain.pause();
        buttonPressAudioFire.pause();
        buttonPressAudioShop.play();
    }

    return{
        pressButtonForest,
        pressButtonRain,
        pressButtonFire,
        pressButtonShop
    }
}
