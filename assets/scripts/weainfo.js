"use strict";

const KEY = "3001abdb93756468e468a3ea662720b6";
const API_URL = "https://api.openweathermap.org"
                + "/data/2.5/forecast?q=nynashamn&appid=" + KEY;

function HttpGet(url) {
    this.url = url;
    this.ajax = new XMLHttpRequest();

}

HttpGet.prototype.proceed = function(callback) {
    this.ajax.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            callback(this.response);
        }
    }
    this.ajax.open("get", this.url, true);
    this.ajax.send();
} 

function fetch(url){
    return new HttpGet(url);
}

/*fetch(API_URL).proceed(response => {
    var weatherData = JSON.parse(response);
    var time = weatherData.list(0).dt_txt;
    var hour = new Date(time).getHours();
    console.log(hour + ":00");
});*/


function $(selector) {
    return document.querySelector(selector);
}

function DOMElement(selector) {
    this.element = $(selector);
}

DOMElement.prototype.select = function(target) {
    this.selected = $(target);
    return this;
}

DOMElement.prototype.click = function(callback) {
    this.element.addEventListener("click", event => {
        event.selected = this.selected;
        callback(event);
    });
}

function find(selector) {
    return new DOMElement(selector);
}


    fetch(API_URL).proceed(response => {
        //event.selected.innerHTML = response;
        //Om knappen är en formulär knapp bör du anropa preventDefault för att undvika
        //sidan laddas om
        //event.preventDefault();

        var weatherData = JSON.parse(response);

        var weatherList = weatherData.list;

        //Foreach skriver ut alla element, vi vill endast skriva ut 5 stycken
        /*weatherList.forEach(element => {
            console.log(data);
        });*/

        var tbody = document.querySelector(".weather-data");
        for(var index = 0; index < 5; index++){
            var time = weatherList[index].dt_txt;
            var date = new Date(time);
            var hour = date.getHours() + ":00";
            
            var wea = weatherList[index].weather[0].description;
            var heat = weatherList[index].main.temp;
            var speed = weatherList[index].wind.speed;

            var timestamp = `
            <tr>
                <td>${hour}</td>
                <td>${wea.charAt(0).toUpperCase() + wea.slice(1)}</td>
                <td>${(heat-273.15).toFixed(1) + "°C"}</td>
                <td>${speed.toFixed(1) + " m/s"}</td>
            </tr>
            `;
            tbody.innerHTML += timestamp;

        }
        
    });

    
