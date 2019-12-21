var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function myFunction(){

  let x;
  let y;
  x = myText.value;
  y = myText2.value;

  var grd = ctx.createLinearGradient(0,0,200,0);
  grd.addColorStop(0, x);
  grd.addColorStop(1, y);


  ctx.fillStyle = grd;
  ctx.fillRect(10,10,150,80);

}
