var buttonColors = ['red', 'blue', 'green', 'yellow'];
var AIClickedPattern = [];
var userClickedPattern = [];

function nextSequence() {
    var randomNum = Math.floor(Math.random() * 4);
    var chosenColor = buttonColors[randomNum];
    AIClickedPattern.push(chosenColor);
    $('#'+chosenColor).fadeOut(100).fadeIn(100);
    var audio = new Audio('sounds/'+chosenColor+'.mp3');
    audio.play();

    $('.btn').click(function() {
        userClickedPattern.push(this.getAttribute('id'));
        console.log(userClickedPattern);
    });
}

nextSequence();
// console.log(userClickedPattern);