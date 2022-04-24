var buttonColors = ['red', 'blue', 'green', 'yellow'];
var AIClickedPattern = [];
var userClickedPattern = [];

function playSound(color) {
    var audio = new Audio('sounds/'+color+'.mp3');
    audio.play();
}

function nextSequence() {
    var randomNum = Math.floor(Math.random() * 4);
    var chosenColor = buttonColors[randomNum];
    AIClickedPattern.push(chosenColor);
    $('#'+chosenColor).fadeOut(100).fadeIn(100);

    $('.btn').click(function() {
        var userColor = this.getAttribute('id');
        userClickedPattern.push(userColor);
        console.log(userClickedPattern);
        playSound(userColor);
    });
}

nextSequence();
// console.log(userClickedPattern);