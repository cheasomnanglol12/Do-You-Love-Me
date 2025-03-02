const startButton = document.getElementById("start_button");
const gifLanding = document.querySelector(".gif");
const questionLanding = document.querySelector(".question");

var question = null;
var gifMain = null;
var yesButton = null;
var noButton = null;
var input = null;
var count = 0;
var images = [
    "https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg", // First image
    "https://i.postimg.cc/9XH8tR7V/IMG-20250302-232705-737.jpg", // Second image
    "https://i.postimg.cc/hjFcXxP7/IMG-20250302-232706-738.jpg", // Third image
    "https://i.postimg.cc/t4JxN6sd/IMG-20250302-232707-739.jpg"  // Fourth image
];

startButton.addEventListener("click", () => {
    input = document.getElementById("fname").value;

    if (input == "") {
        gifLanding.src = "https://media.giphy.com/media/VB3cK9oA48BbQWcObd/giphy.gif";
        questionLanding.innerHTML = "Please give me your name before you start!";
    } else {
        document.head.innerHTML = `
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>Do You Love Me?</title>
            <link rel='stylesheet' href='styleMain.css'/>
        `;

        document.body.innerHTML = `
            <div class='wrapper'>
                <h2 class='question'>Hello ${input}! Will you go out with me?</h2>
                <img class='gif' alt='gif' src='https://i.postimg.cc/wB1wTMkP/IMG-20250302-232704-736.jpg'/>
                <div class='btn-group'>
                    <button class='yes-btn'>Yes</button>
                    <button class='no-btn'>No</button>
                </div>
            </div>
        `;

        questionMain = document.querySelector(".question");
        gifMain = document.querySelector(".gif");
        yesButton = document.querySelector(".yes-btn");
        noButton = document.querySelector(".no-btn");

        yesButton.addEventListener("click", yesButtonListener);
        noButton.addEventListener("click", noButtonListener);
    }
});

function yesButtonListener() {
    document.body.innerHTML = `
        <div class='wrapper'>
            <h2 class='question'>Yay! Thank you for loving me ❤️, ${input}!</h2>
            <img class='gif' alt='gif' src='https://media.giphy.com/media/fHGl1MDMNkO6fOaFDF/giphy.gif'/>
        </div>
        <script src='scriptMain.js'></script>
    `;
}

function noButtonListener() {
    // Loop through images and display one based on the count
    const imageIndex = count % images.length;  // Loop through the images array
    gifMain.src = images[imageIndex];
    
    if (count < 5) {
        questionMain.innerHTML = "You don't love me?";
    } else if (count >= 5 && count < 10) {
        questionMain.innerHTML = "Stop playing with me! Do you love me or not?!";
    } else {
        questionMain.innerHTML = "JUST ANSWER IT! DO YOU LOVE ME?!";
    }

    // Get button dimensions and randomize position
    const noButtonRect = noButton.getBoundingClientRect();
    const maxX = window.innerWidth - noButtonRect.width;
    const maxY = window.innerHeight - noButtonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
    count++;
}
