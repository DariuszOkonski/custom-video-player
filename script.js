const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// play & pause viedo
function toggleVideoStatus() {
  return true;
}

// update play/pause icon
function updatePlayIcon() {
  return true;
}

// update progress & timestamp
function updateProgress() {
  return true;
}

// set video time to progress
function setVideoProgress() {
  return true;
}

// stop video
function stopVideo() {
  return true;
}

// event listener
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);