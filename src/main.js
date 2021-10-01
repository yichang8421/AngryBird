import {string} from "./css.js"

let n = 1;
window.htmlStyle.innerHTML = string.substr(0, n);
window.text.innerText = string.substr(0, n);

const x = () => {
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

let id = setInterval(() => {
    x();
}, 0);

btnPause.onclick = () => {
    window.clearInterval(id)
    id = null;
};

btnPlay.onclick = () => {
    if (!id) {
        id = setInterval(() => {
            x();
        }, 0);
    }
}