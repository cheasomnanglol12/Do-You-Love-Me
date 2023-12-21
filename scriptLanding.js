const startButton = document.getElementById("start_button");


startButton.addEventListener("click", () => {
    document.getElementsByTagName("head")[3] = "<link rel='stylesheet' href='styleMain.css'/>"
    document.body.innerHTML = "<div class='wrapper'><h2 class='question'>Will you go out with me?</h2><img class='gif' alt='gif' src='https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif'/><div class='btn-group'<button class='yes-btn'>Yes</button><button class='no-btn'>No</button></div></div><script src='scriptMain.js'></script>"
});