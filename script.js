// Function to create a new virus image
function createVirus() {
    const virus = document.createElement('img');
    virus.src = 'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg';
    virus.classList.add('virus-image');

    // Random position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    virus.style.left = `${x}px`;
    virus.style.top = `${y}px`;

    // Append to body
    document.body.appendChild(virus);

    // Make the virus multiply after a delay
    setTimeout(() => {
        createVirus(); // Create another virus
        createVirus(); // Create another virus
    }, 1000); // Adjust delay for more/less chaos
}

// Start the virus effect
createVirus();

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
