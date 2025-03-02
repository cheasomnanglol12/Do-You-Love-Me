// Array of image sources (using the same image URL as requested)
const imageSources = [
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg', 
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg', 
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg', 
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg', 
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg', 
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg', 
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg',
    'https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg'
    
];

// Select the container where the images will be added
const imageContainer = document.querySelector('.image-train-container');

// Function to load images into the container
function loadImages() {
    for (let i = 0; i < 20; i++) {  // Repeat images to make the "train" long
        imageSources.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Cute Image';
            imageContainer.appendChild(img);
        });
    }
}

// Call the function to load the images
loadImages();

// Select the yes and no buttons
const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');
const questionText = document.querySelector('.question');

// Event listener for the "Yes" button
yesButton.addEventListener('click', () => {
    questionText.innerHTML = "Yay! Thank you for loving me ❤️!";
    questionText.style.color = '#ff1493'; // Change the question color
    loadImages(); // Reload images to keep the train going

    // Show a cute heart animation
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove(); // Remove heart after animation
    }, 1500);
});

// Event listener for the "No" button
let count = 0; // Counter to track how many times "No" is clicked
noButton.addEventListener('click', () => {
    count++;
    if (count <= 5) {
        questionText.innerHTML = "You don't love me?";
    } else if (count <= 10) {
        questionText.innerHTML = "Stop playing with me!";
    } else {
        questionText.innerHTML = "JUST ANSWER IT!";
    }

    questionText.style.color = '#ff4500'; // Change the question color

    // Make the "No" button move randomly
    const noButtonRect = noButton.getBoundingClientRect();
    const maxX = window.innerWidth - noButtonRect.width;
    const maxY = window.innerHeight - noButtonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});
