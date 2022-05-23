
function sqr(a) {
    return a * a;
}
function DistanceSimple(x1, y1) {
    return Math.sqrt(sqr(y1) + sqr(x1));
}
function Distance(x1, y1, x2, y2) {
    return Math.sqrt(sqr(y2 - y1) + sqr(x2 - x1));
}
