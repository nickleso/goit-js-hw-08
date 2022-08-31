// import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

// video Title
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

// current time
function currentTime({ seconds }) {
  const timeToStart = Math.round(seconds);
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, timeToStart);
}

const savedTime = localStorage.getItem(VIDEOPLAYER_CURRENT_TIME)
  ? localStorage.getItem(VIDEOPLAYER_CURRENT_TIME)
  : 0;
console.log(`Paused on: ${savedTime} second`);

const throttleCurrentTime = throttle(currentTime, 1000);

player.on('timeupdate', throttleCurrentTime);

player
  .setCurrentTime(savedTime)
  .then(function () {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
