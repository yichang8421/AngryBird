import {string} from "./css.js"

let n = 1;
window.htmlStyle.innerHTML = string.substr(0, n);
window.text.innerText = string.substr(0, n);
console.log(n);

let id = setInterval(() => {
    n += 1;
    if (n > string.length) {
        window.clearInterval(id)
        return;
    }
    console.log(n + ":" + string.substr(0, n));
    window.htmlStyle.innerHTML = string.substr(0, n);
    window.text.innerText = string.substr(0, n);
    window.text.scrollTop = window.text.scrollHeight;
}, 0)