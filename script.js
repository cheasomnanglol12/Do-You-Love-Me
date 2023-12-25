const startButton = document.getElementById("start_button");
const gifLanding = document.querySelector(".gif");
const questionLanding = document.querySelector(".question");


var question = null;
var gifMain = null;
var yesBtn = null;
var noBtn = null;
var input = null;


startButton.addEventListener("click", () => {
    input = document.getElementById("fname").value;

    if (input== ""){
        gifLanding.src = "https://media.giphy.com/media/VB3cK9oA48BbQWcObd/giphy.gif";
        questionLanding.innerHTML = "Please give  me your name before you start!"
    }
    else{
        document.head.innerHTML = "<meta charset='UTF-8'>"+
        "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"+
        "<title>Do You Love Me?</title>"+
        "<link rel='stylesheet' href='styleMain.css'/>"

        document.body.innerHTML = "<div class='wrapper'><h2 class='question'>Hello "+input+ "! Will you go out with me?</h2>"+
        "<img class='gif' alt='gif' src='https://media.giphy.com/media/0kDdAFAELmvvFNUKim/giphy.gif'/>"+
        "<div class='btn-group'><button class='yes-btn'>Yes</button>"+
        "<button class='no-btn'>No</button></div></div>"

        questionMain = document.querySelector(".question");
        gifMain = document.querySelector(".gif");
        yesBtn = document.querySelector(".yes-btn");
        noBtn = document.querySelector(".no-btn");

        yesBtn.addEventListener("click", yesButtonListener);
        noBtn.addEventListener("click", noButtonListener);
    }
});

function yesButtonListener(){
    document.body.innerHTML = "<div class='wrapper'><h2 class='question'>Yay! Thank you for loving me ❤️, "+input+ "!</h2>"+
    "<img class='gif' alt='gif' src='https://media.giphy.com/media/fHGl1MDMNkO6fOaFDF/giphy.gif'/></div><script src='scriptMain.js'></script>"
    gifMain.src = "https://media.giphy.com/media/fHGl1MDMNkO6fOaFDF/giphy.gif";
}

function noButtonListener(){
    gifMain.src ="https://media.giphy.com/media/hbOgjMOUfLdWV2Ty1j/giphy.gif";
    questionMain.innerHTML = "You don't love me?";
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}