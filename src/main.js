import {string} from "./css.js"

let n = 1;
window.htmlStyle.innerHTML = string.substr(0, n);
window.text.innerText = string.substr(0, n);

let speedCase = 1, time = 100;

const play = () => {
    if (!id) {
        id = setInterval(run, time);
    }
};

const Pause = () => {
    window.clearInterval(id)
    id = null;
};

const changeSpeed = () => {
    speedCase += 1;
    if (speedCase > 4) {
        speedCase = 1
    }
    switch (speedCase) {
        case 1:
            time = 100;
            break;
        case 2:
            time = 50;
            break;
        case 3:
            time = 25;
            break;
        case 4:
            time = 0;
            break;
        default:
            return 0;
    }
}

const run = () => {
    n += 1;
    if (n > string.length) {
        window.clearInterval(id)
        return;
    }
    window.htmlStyle.innerHTML = string.substr(0, n);
    window.text.innerText = string.substr(0, n);
    window.text.scrollTop = window.text.scrollHeight;
}

let id = setInterval(run, time);

btnPause.onclick = () => {
    Pause();
};

btnPlay.onclick = () => {
    play();
};

btnSpeed.onclick = () => {
    changeSpeed();
    Pause();
    play();
}