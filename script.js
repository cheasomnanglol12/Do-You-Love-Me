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

    // Explode into particles after animation
    setTimeout(() => {
        explodeVirus(virus);
    }, 2000); // Matches the animation duration
}

// Function to explode the virus into particles
function explodeVirus(virus) {
    const particles = 20; // Number of particles
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('virus-particle');
        particle.style.left = virus.offsetLeft + 'px';
        particle.style.top = virus.offsetTop + 'px';
        document.body.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }

    // Remove the virus
    virus.remove();
}

// Create multiple viruses
function startVirusAttack() {
    setInterval(() => {
        for (let i = 0; i < 10; i++) { // Create 10 viruses at a time
            createVirus();
        }
    }, 500); // Adjust interval for more/less chaos
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
