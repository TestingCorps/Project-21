function hasCollided(x,y){
    xRightEdge = x.x + x.width;
    yLeftEdge = y.x;
    if(xRightEdge>=yLeftEdge){
        return true;
    }
    return false;
}