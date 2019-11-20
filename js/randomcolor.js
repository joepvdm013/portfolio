document.getElementById('knop').addEventListener('click',myStopFunction)
//document.getElementById('demo').innerHTML = new Date().toLocaleTimeString();
var myInterval = setInterval(myRandomColor, 100);

//rgb(200,50,130);

function myRandomColor() {
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);



  let randomcolor = 'rgb('+ r + ', ' + g + ', ' + b +')';
  document.body.style.backgroundColor = randomcolor;
}

function myStopFunction(){
  clearInterval(myInterval);
}
