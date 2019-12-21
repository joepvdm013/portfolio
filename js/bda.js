function myMove() {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
      document.getElementById("container").style.backgroundColor = "#FF355E";
      document.getElementById("animate").style.backgroundColor = "#1b1b1b";
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
      document.getElementById("container").style.backgroundColor = "#1b1b1b";
    }
  }
}
