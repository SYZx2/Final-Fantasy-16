// Select video element
const video = document.getElementById('battle-video');

// Select control buttons
const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
const muteButton = document.getElementById('mute-btn');

// Play video
playButton.addEventListener('click', () => {
    video.play();
});

// Pause video
pauseButton.addEventListener('click', () => {
    video.pause();
});

// Mute or unmute video
muteButton.addEventListener('click', () => {
    video.muted = !video.muted;
    muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
});
