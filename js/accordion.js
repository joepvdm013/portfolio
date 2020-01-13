var acc = document.getElementsByClassName("accordion");
var input = document.querySelectorAll("input");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
var een = document.getElementById("panel1").value,
 twee = document.getElementById("panel2").value,
 drie = document.getElementById("panel3").value;


document.getElementById('para').innerHTML = (een + ' ' + twee + ' ' + drie);
});


var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
