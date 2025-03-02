// Array of image sources (use your own URLs or paths)
const imageSources = [
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100'
];

// Select the container where the images will be added
const imageContainer = document.querySelector('.image-train-container');

// Function to load images into the container
function loadImages() {
    for (let i = 0; i < 20; i++) {  // Repeat images to make the "train" long
        imageSources.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Image Train';
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
});
