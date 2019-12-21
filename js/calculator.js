let x, y;

// function alphanumeric(inputtxt) {
//   var letterNumber = /^[0-9]+$/;
//   if ((inputtxt.value.match(letterNumber)) {
//       return true;
//     } else {
//       alert("message");
//       return false;
//     }
//   }


  function myFunction() {

    x = Number(document.getElementById('x').value);
    y = Number(document.getElementById('y').value);

  }

  function plus() {
    //alphanumeric(x);
    myFunction();
    result = x + y;
    alert("Het antwoord is " + result);


  }

  function min() {
    myFunction();
    result = x - y;
    alert("Het antwoord is " + result);


  }

  function vermenigvuldigen() {
    myFunction();
    result = x * y;
    alert("Het antwoord is " + result);


  }

  function delen() {
    myFunction();
    result = x / y;
    alert("Het antwoord is " + result);


  }
