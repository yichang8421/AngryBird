import {string} from "./css.js"

let n = 1;
window.htmlStyle.innerHTML = string.substr(0, n);
window.text.innerText = string.substr(0, n);

let speedCase = 1, time = 80

const run = () => {
    n += 1;
    if (n > string.length) {
        window.clearInterval(id)
        return;
    }
    // console.log(n + ":" + string.substr(0, n));
    window.htmlStyle.innerHTML = string.substr(0, n);
    window.text.innerText = string.substr(0, n);
    window.text.scrollTop = window.text.scrollHeight;
}

let id = setInterval(run, time);

btnPause.onclick = () => {
    window.clearInterval(id)
    id = null;
};

btnPlay.onclick = () => {
    if (!id) {
        id = setInterval(run, time);
    }
};


btnSpeed.onclick = () => {
    speedCase += 1;
    if (speedCase > 3) {
        speedCase = 1
    }
    switch (speedCase) {
        case 1:
            time = 50;
            break
        case 2:
            time = 30;
            break
        case 3:
            time = 0;
            break
        default:
            return 0;
    }
    window.clearInterval(id)
    id = null;
    id = setInterval(run, time);
}