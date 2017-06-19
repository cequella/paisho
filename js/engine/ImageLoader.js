
function ImageLoader(context, path) {
    this.m_context = context;
    this.m_x       = 0.0;
    this.m_y       = 0.0;
    this.m_width   = 0.0;
    this.m_height  = 0.0;
    this.m_path    = path;
    this.m_ready   = false;
    
    var that = this;
    this.m_image = new Image();
    this.m_image.onload = function() {
	that.m_ready = true;
    }
    this.m_image.src = this.m_path;
}

// Setters
ImageLoader.prototype.x = function(t_x){
    this.m_x = t_x;
    return this;
}
ImageLoader.prototype.y = function(t_y){
    this.m_y = t_y;
    return this;
}
ImageLoader.prototype.coord = function(t_x, t_y){
    return this.x(t_x).y(t_y);
}
ImageLoader.prototype.width = function(t_width){
    this.m_width = t_width;
    return this;
}
ImageLoader.prototype.height = function(t_height){
    this.m_height = t_height;
    return this;
}
ImageLoader.prototype.dimen = function(t_width, t_height){
    return this.width(t_width).height(t_height);
}
ImageLoader.prototype.rect = function(t_x, t_y, t_width, t_height){
    return this.coord(t_x, t_y).dimen(t_width, t_height);
}

ImageLoader.prototype.draw = function() {
    if(this.m_ready){
	this.m_context.drawImage(this.m_image, this.m_x, this.m_y, this.m_width, this.m_height);
    }
}
