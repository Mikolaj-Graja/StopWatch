let nowTime = 0
let pastTime = 0
let time = 0
const startBtn = document.querySelector('button.start');
const divTime = document.querySelector('div.time div');
const resetBtn = document.querySelector('button.reset'); 
let active = false
let timer = 0

const changeTime = function() {
    nowTime = new Date().getTime();
    time =  ((nowTime-pastTime)/1000).toFixed(2);
    divTime.textContent = time
}

const start = () => {
    if(!active){
        if(pastTime == 0){
        pastTime = new Date().getTime();
        }
        timer = setInterval(changeTime,10);
        startBtn.textContent = "Pauza";
        active = !active;
    } else{
        clearInterval(timer);
        startBtn.textContent = "Resume";
        active = !active;
    }
}

const stop = () => {
    clearInterval(timer);
    pastTime = 0;
    divTime.textContent = '---';
    startBtn.textContent = 'Start';
    active = false;

}

startBtn.addEventListener('click', start);
resetBtn.addEventListener('click', stop);