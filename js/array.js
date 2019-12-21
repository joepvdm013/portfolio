let boodschappen = [];

function myFunction(){

  boodschappen.push(myText2.value);
  document.getElementById("demo").innerHTML = boodschappen;
  document.getElementById('myText2').value = '';
}


window.addEventListener("keyup", checkKeyPress, false);

function checkKeyPress(key){
  if (key.keyCode == "13"){

    boodschappen.push(myText2.value);
    document.getElementById("demo").innerHTML = boodschappen;
    document.getElementById('myText2').value = '';

  }
}
