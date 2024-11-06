const user1Card = document.getElementById('user1');
const user2Card = document.getElementById('user2');
const background1 = document.getElementById('background1');
const background2 = document.getElementById('background2');

user1Card.addEventListener('mouseenter', () => {
    background1.style.opacity = 1; // Fade in user 1 background
    background2.style.opacity = 0; // Ensure background2 is hidden
});

user1Card.addEventListener('mouseleave', () => {
    background1.style.opacity = 0; // Fade out user 1 background
});

user2Card.addEventListener('mouseenter', () => {
    background2.style.opacity = 1; // Fade in user 2 background
    background1.style.opacity = 0; // Ensure background1 is hidden
});

user2Card.addEventListener('mouseleave', () => {
    background2.style.opacity = 0; // Fade out user 2 background
});
document.getElementById('start-button').addEventListener('click', function() {
    // Hide the start screen
    document.getElementById('start-screen').style.display = 'none';

    // Show the cards container
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.style.display = 'flex';

    // Optional: Add an animation or transition to the card reveal
    cardsContainer.style.opacity = 0;
    setTimeout(() => {
        cardsContainer.style.opacity = 1;
        cardsContainer.style.transition = 'opacity 1s ease-in-out';
    }, 100);

    document.body.style.backgroundImage = "url('vf.webp')"; 
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

    // Mute/Unmute button functionality (if needed)
    const muteButton = document.getElementById('mute-button');
    const muteIcon = document.getElementById('mute-icon');
    const backgroundMusic = document.getElementById('background-music');

    muteButton.addEventListener('click', function() {
        if (backgroundMusic.muted) {
            backgroundMusic.muted = false;
            muteIcon.classList.remove('fa-volume-mute');
            muteIcon.classList.add('fa-volume-up');
        } else {
            backgroundMusic.muted = true;
            muteIcon.classList.remove('fa-volume-up');
            muteIcon.classList.add('fa-volume-mute');
        }
    });

    // Start background music (if audio is present)
    const music = document.getElementById('background-music');
    if (music) {
        music.play();
    }
});

