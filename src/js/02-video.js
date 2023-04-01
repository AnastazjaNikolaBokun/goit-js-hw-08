import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = localStorage.getItem('videoplayer-current-time');

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function (data) {
  console.log(data.seconds);
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(currentTime);
