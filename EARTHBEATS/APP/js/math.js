function mapRange(value, a, b, c, d) {
    // first map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
  }
  function isPair(value){
    if (value % 2 == 0){return Math.PI}
    else{return 0}
  }
  function lerp (start, end, amt){
    return (1-amt)*start+amt*end
  }