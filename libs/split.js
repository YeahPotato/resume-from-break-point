Buffer.prototype.split = Buffer.prototype.split || function (boundary) {
    let result = [];
    let curIndex = 0;
    let boundaryPos = 0;
    while ((boundaryPos = this.indexOf(boundary, curIndex)) != -1) {
        result.push(this.slice(curIndex, boundaryPos));
        curIndex = boundaryPos + boundary.length;
    }
    result.push(this.slice(curIndex));
    return result;
}