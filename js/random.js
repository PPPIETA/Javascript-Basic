document.onload = function placeDiv(){
  var elem = document.getElementById("divxx");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame(){
    if (pos == 700){
      clearInterval(id);
    } alse {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
/*  var lefft = Math.floor(Math.random()*10);
  var toop = Math.floor(Math.random()*10);
  document.getElementById("divxx").style.top = toop;
  document.getElementById("divxx").style.left = lefft;
}
