var minV = document.getElementById('minimal');
var maxV = document.getElementById('maximal');
var button = document.getElementById('btn');
var p = document.getElementById('demo');

button.addEventListener("click", function(){
var i =  Math.floor(Math.random() * maxV.value) ;
  p.innerHTML = i;
});
