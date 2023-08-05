import Sounds from "./sounds.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
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


const sounds = Sounds({buttonPressAudioForest,buttonPressAudioRain,buttonPressAudioFire,buttonPressAudioShop});
const controls = Controls({selectForest,selectRain,selectFire,selectShop});
const timer = Timer();


selectForest.addEventListener("click",function(){
    controls.inputForest();
    sounds.pressButtonForest();
});

selectRain.addEventListener("click",function(){
    controls.inputRain();
    sounds.pressButtonRain();
});

selectFire.addEventListener("click",function(){
    controls.inputFire();
    sounds.pressButtonFire();
});

selectShop.addEventListener("click",function(){
    controls.inputShop();
    sounds.pressButtonShop();
});

buttonPlay.addEventListener("click",function(){
    timer.countDown();
})

buttonStop.addEventListener("click",function(){
    timer.stopOn();
})

buttonPlus.addEventListener("click",function(){
    timer.setMinutesPlus();
})

buttonMinus.addEventListener("click",function(){
    timer.setMinutesMinus();
})



