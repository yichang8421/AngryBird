import {string} from "./css.js"

const player = {
    n: 1,
    id: undefined,
    speedCase: 2,
    time: 100,
    ui: {
        htmlStyle: document.getElementById("htmlStyle"),
        text: document.getElementById("text"),
        speedStatus: document.getElementById("speedStatus")
    },
    viewText: "",
    init: () => {
        player.ui.htmlStyle.innerHTML = string.substr(0, player.n);
        player.ui.text.innerText = string.substr(0, player.n);
        player.id = setInterval(player.run, player.time);
        player.bindEvents();
    },

    events: {
        "#btnPause": "pause",
        "#btnPlay": "play",
        "#btnSpeed": "changeSpeed"
    },

    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value];
            }
        }
    },

    run: () => {
        if (string[player.n] === "\n") {
            player.viewText += '<br>';
        } else if (string[player.n] === " ") {
            player.viewText += "&nbsp;";
        } else {
            player.viewText += string[player.n];
        }
        player.n += 1;
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return;
        }

        player.ui.htmlStyle.innerHTML = string.substr(0, player.n);
        player.ui.text.innerHTML = player.viewText;
        player.ui.text.scrollTop = player.ui.text.scrollHeight;
    },

    play: () => {
        if (!player.id) {
            player.id = setInterval(player.run, player.time);
        }
    },

    pause: () => {
        window.clearInterval(player.id)
        player.id = undefined;
    },

    selectCase: () => {
        player.speedCase += 1;
        if (player.speedCase > 4) {
            player.speedCase = 1
        }
        switch (player.speedCase) {
            case 1:
                player.time = 100;
                player.ui.speedStatus.innerText = "0.5×";
                break;
            case 2:
                player.time = 50;
                player.ui.speedStatus.innerText = "1.0×";
                break;
            case 3:
                player.time = 25;
                player.ui.speedStatus.innerText = "1.5×";
                break;
            case 4:
                player.time = 0;
                player.ui.speedStatus.innerText = "2.0×";
                break;
            default:
                return 0;
        }
    },

    changeSpeed: () => {
        player.selectCase();
        player.pause();
        player.play();
    }
}

player.init();