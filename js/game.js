/*var canvas;
var context;

var image;

var width;
var height;

function preset() {
    canvas  = document.getElementById("canvas");
    context = canvas.getContext("2d");

    width  = canvas.width;
    height = canvas.height;
    const size   = Math.min(width, height);
    
    image = new ImageLoader(context, "./assets/table.png");
    image.rect(0, 0, size, size);
}
function mainLoop() {
    context.clearRect(0,0, width, height);
    
    image.draw();
    requestAnimationFrame(mainLoop);
}

function startGame() {
    preset();
    mainLoop();
}*/

function startGame() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var ingame = new InGame(context);
    ingame.start();
}
