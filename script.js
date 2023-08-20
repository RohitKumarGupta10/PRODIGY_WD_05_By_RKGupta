let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let input = document.getElementById("inp") ;
let API_key = "c8b58a855bebc9160da2d4284736cc75";  /* This is My Api Key (Credit: Open WeatherMap API)*/

 const data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    console.log(getData);
    let jsonData =await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);
    city.innerHTML=search;
    temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
    type.innerHTML=jsonData.weather[0].main;
 }

 function myFun(){
    search=input.value;
    data(search)
 }