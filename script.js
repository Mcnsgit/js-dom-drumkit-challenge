document.addEventListener('DOMContentLoaded', () => {
    const audioElements = {
        'b': document.getElementById('boom'),
        'c': document.getElementById('clap'),
        'h': document.getElementById('hihat'),
        'k': document.getElementById('kick'),
        'o': document.getElementById('openhat'),
        'r': document.getElementById('ride'),
        's': document.getElementById('snare'),
        't': document.getElementById('tink'),
        'y': document.getElementById('tom'),
    };

    function playSound(key) {
        const audioElement = audioElements[key];
        if (audioElement) {
            audioElement.currentTime = 0; // Reset to start
            audioElement.play();
        }
    }

    function buttonAnimation(key) {
        const button = document.querySelector(`.${key}`);
        if (button) {
            button.classList.add('pressed');
            setTimeout(() => button.classList.remove('pressed'), 100);
        }
    }

    // Play sound and animate on key press
    document.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();
        playSound(key);
        buttonAnimation(key);
    });

    // Play sound and animate on button click
    const drumButtons = document.querySelectorAll('.drum');
    drumButtons.forEach(button => {
        button.addEventListener('click', () => {
            const key = button.getAttribute('data-key');
            playSound(key);
            buttonAnimation(key);
        });
    });
});
