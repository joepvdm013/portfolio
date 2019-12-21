$(document).click(function(){

$.getJSON(api + input.value() + apikey + units , function (data) {

$("#cou").text(data.name);
  $("#temp").text(data.main.temp);
  $("#we").text(data.weather[0].description);
});
 });

 var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apikey = '&APPID=84e3abd90582c62021f9f89d6a06fdc0'
var units = '&units=metric'

var input;

function setup(){
  var canvas = createCanvas(400,200);
  var button = select('#submit');
  button.mousePressed(askWeather);
canvas.parent('sketch');
input = select('#city');
}

function askWeather(){
  var url = api + input.value() + apikey + units;
  loadJSON(url, gotData);
}
function gotData(data){
  weather = data;
}

function draw(){
  background(0);
  if(weather){
  ellipse(100, 100, weather.main.temp, weather.main.temp);
    ellipse(300, 100, weather.main.humidity, weather.main.humidity);
  }
}
