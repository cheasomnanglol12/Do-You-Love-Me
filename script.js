// Function to create a virus image
function createVirus() {
    const virus = document.createElement('img');
    virus.src = 'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg'; // Your image link
    virus.classList.add('virus-image');

    // Random position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    virus.style.left = `${x}px`;
    virus.style.top = `${y}px`;

    // Append to body
    document.body.appendChild(virus);

    // Remove the virus after the explosion animation
    setTimeout(() => {
        virus.remove();
    }, 2500); // Matches the animation duration
}

// Create multiple viruses
function startVirusAttack() {
    setInterval(() => {
        for (let i = 0; i < 5; i++) { // Create 5 viruses at a time
            createVirus();
        }
    }, 1000); // Adjust interval for more/less chaos
}

// Start the virus attack
startVirusAttack();

// Button actions
document.getElementById('yesButton').addEventListener('click', function() {
    alert('Yay! I love you too! ❤️');
});

document.getElementById('noButton').addEventListener('click', function() {
    alert('Oh no! Why not? 😢');
});

// Make the "No" button run away
document.getElementById('noButton').addEventListener('mouseover', function() {
    const noButton = this;
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});
