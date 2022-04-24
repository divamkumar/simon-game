buttonColors = ['red', 'blue', 'green', 'yellow'];
gameSequence = [];

function nextSequence() {
    var randomNum = Math.floor(Math.random() * 4);
    return randomNum;
}

var chosenColor = buttonColors[nextSequence()]; 

function simonChooses(color) {
    switch (color) {
        case 'red':
            $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            break;
        case 'blue':
            $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            break;
        
        case 'green':
            $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            break;
        case 'yellow':
            $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            break;
        default:
            console.log(color);
            break;
    }
}