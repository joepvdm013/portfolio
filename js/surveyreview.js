var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var star1 = document.getElementById('star1');
var star2 = document.getElementById('star2');
var star3 = document.getElementById('star3');
var star4 = document.getElementById('star4');
var star5 = document.getElementById('star5');
output.innerHTML = slider.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  if (slider.value > 0 && slider.value <= 20) {
    output.style.color = 'red';
    star1.style.display = 'block';
    star2.style.display = 'none';
    star3.style.display = 'none';
    star4.style.display = 'none';
    star5.style.display = 'none';
  } else if (slider.value > 20 && slider.value <= 40) {
    output.style.color = 'orange';
    star1.style.display = 'block';
    star2.style.display = 'block';
    star3.style.display = 'none';
    star4.style.display = 'none';
    star5.style.display = 'none';
  } else if (slider.value > 40 && slider.value <= 60) {
    output.style.color = 'yellow';
    star1.style.display = 'block';
    star2.style.display = 'block';
    star3.style.display = 'block';
    star4.style.display = 'none';
    star5.style.display = 'none';
  } else if (slider.value > 60 && slider.value <= 80) {
    output.style.color = '	#3AA655';
    star1.style.display = 'block';
    star2.style.display = 'block';
    star3.style.display = 'block';
    star4.style.display = 'block';
  } else if (slider.value > 80 && slider.value <= 100) {
    output.style.color = '	#66FF66';
    star1.style.display = 'block';
    star2.style.display = 'block';
    star3.style.display = 'block';
    star4.style.display = 'block';
    star5.style.display = 'block';
  } else {
    output.style.color = 'darkred';
    star1.style.display = 'none';
    star2.style.display = 'none';
    star3.style.display = 'none';
    star4.style.display = 'none';
    star5.style.display = 'none';
  }
}
