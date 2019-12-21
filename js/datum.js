function myFunction() {
  var datum = new Date();
  var dagen = new Array(7);
  dagen[0] = "Zondag";
  dagen[1] = "Maandag";
  dagen[2] = "Dinsdag";
  dagen[3] = "Woensdag";
  dagen[4] = "Donderdag";
  dagen[5] = "Vrijdag";
  dagen[6] = "Zaterdag";

  var n = dagen[datum.getDay()];
  document.getElementById("demo").innerHTML = n;
}
