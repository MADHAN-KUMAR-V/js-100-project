const dayE = document.getElementById("day");
const hourE = document.getElementById("hour");
const minuteE = document.getElementById("minute");
const secondE = document.getElementById("second");


const newYear = new Date("Jan 1,2024 00:00:00").getTime();
updateCountDown();

function updateCountDown(){
    const now = new Date().getTime();
    const diff = newYear - now;
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(diff/day)
    const h = Math.floor((diff % day) / hour);
    const m = Math.floor((diff % hour) / minute);
    const s = Math.floor((diff % minute)/second);
    dayE.innerText = d;
    hourE.innerText = h;
    minuteE.innerText = m;
    secondE.innerText = s;
    setTimeout(updateCountDown,1000);

}

