
function Scene(context) {
    this.m_context = context;
}

Scene.prototype.preset = function(context){
}
Scene.prototype.mainLoop = function(context){
}

Scene.prototype.loop = function(){
    this.mainLoop(this.m_context);
    requestAnimationFrame(loop);
}
Scene.prototype.start = function() {
    this.preset(this.m_context);
    this.loop(this.m_context);
}
