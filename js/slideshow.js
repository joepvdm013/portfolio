var i = 0;
var images = [];
var time = 2000;

images[0] = '../img/ae1.png';
images[1] = '../img/ae2.png';
images[2] = '../img/ae3.png';
images[3] = '../img/ae4.png';

function slideshow(){
  document.slide.src = images[i];

  if (i < images.length -1){
    i++;
  } else{
    i = 0;
  }

  setTimeout("slideshow()", time);
}

window.onload = slideshow;
