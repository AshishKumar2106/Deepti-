document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('welcome-page').classList.remove('hidden');
});

const audio = document.querySelector('audio');
document.getElementById('mute-btn').addEventListener('click', function() {
    audio.muted = !audio.muted;
    this.textContent = audio.muted ? 'Unmute Music' : 'Mute Music';
});