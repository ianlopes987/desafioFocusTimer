
import {
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonStop,
    selectForest,
    selectRain,
    selectFire,
    selectShop,
    buttonPressAudioForest,
    buttonPressAudioRain,
    buttonPressAudioFire,
    buttonPressAudioShop,
    buttonPlus,
    buttonMinus
}  from "./elements.js"


export default function Controls({selectForest,selectRain,selectFire,selectShop}){

    function inputForest(){
        selectForest.classList.add("changeStation");
        selectRain.classList.remove("changeStation");
        selectFire.classList.remove("changeStation");
        selectShop.classList.remove("changeStation");
        buttonPressAudioForest.play();
        buttonPressAudioRain.pause();
        buttonPressAudioFire.pause();
        buttonPressAudioShop.pause();
    }
    
    function inputRain(){
        selectForest.classList.remove("changeStation");
        selectRain.classList.add("changeStation");
        selectFire.classList.remove("changeStation");
        selectShop.classList.remove("changeStation");
    }
    
    
    function inputFire(){
        selectForest.classList.remove("changeStation");
        selectRain.classList.remove("changeStation");
        selectFire.classList.add("changeStation");
        selectShop.classList.remove("changeStation");
    }
    
    
    function inputShop(){
        selectForest.classList.remove("changeStation");
        selectRain.classList.remove("changeStation");
        selectFire.classList.remove("changeStation");
        selectShop.classList.add("changeStation");
    }

    return{
        inputForest,
        inputRain,
        inputFire,
        inputShop
    }
}
