
function InGame(context) {
    Scene.call(context);
    
    this.m_image;
}
InGame.prototype.preset = function(context){
    const imageSize = Math.min(context.canvas.width/3.0, context.canvas.height/3.0);
    
    this.m_image = new ImageLoader(context, "./assets/table.png");
    this.m_image.rect(0, 0, imageSize, imageSize);
}
InGame.prototype.mainLoop = function(context){
    this.m_image.draw();
}

InGame.prototype = Object.create(Scene.prototype);
InGame.prototype.constructor = InGame;
