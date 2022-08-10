import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = "videoplayer-current-time"
const getCurrantTime = localStorage.getItem(LOCALSTORAGE_KEY)

let parsVideoTime;


if (getCurrantTime !== null) {
    parsVideoTime = JSON.parse(getCurrantTime)
    player.setCurrentTime(parsVideoTime);
} else {
    parsVideoTime = 0
}

function onPlay({ seconds }) {
    localStorage.setItem(LOCALSTORAGE_KEY, seconds)
};

player.on('timeupdate', throttle(onPlay, 1000));

