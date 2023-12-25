const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = "<div class='wrapper'><h2 class='question'>Yay! Thank you for loving me ❤️</h2>"+
        "<img class='gif' alt='gif' src='https://media.giphy.com/media/fHGl1MDMNkO6fOaFDF/giphy.gif'/></div><script src='scriptMain.js'></script>"
    question.innerHTML = "Yay! Thank you for loving me ❤️";
    gif.src = "https://media.giphy.com/media/fHGl1MDMNkO6fOaFDF/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
    gif.src ="https://media.giphy.com/media/hbOgjMOUfLdWV2Ty1j/giphy.gif";
    question.innerHTML = "You don't love me?";
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});