const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const milliseconds = document.querySelector("#milliseconds");
const btnStart = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");
let interval;
let minutos = 0;
let segundos = 0;
let milissegundos = 0;
let running = false;

btnStart.addEventListener("click", startTime);
pauseBtn.addEventListener("click", pauseTime);
resetBtn.addEventListener("click", resetTime);


function startTime() {
    if (running) return;

    running = true;
    
    interval = setInterval(() => {
        milissegundos += 10

        if (milissegundos === 1000) {
            segundos++
            milissegundos = 0;
        } else if (segundos === 60) {
            minutos++
            segundos = 0;
        }

        minutes.textContent = formatTime(minutos);
        seconds.textContent = formatTime(segundos);
        milliseconds.textContent = formatMilliseconds(milissegundos);
    }, 10);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}

function pauseTime() {
    clearInterval(interval)
    running = false;
}

function resetTime() {
    clearInterval(interval);
    running = false;
    minutos = 0;
    segundos = 0;
    milissegundos = 0;
    minutes.textContent = "00"
    seconds.textContent = "00"
    milliseconds.textContent = "000"
}

