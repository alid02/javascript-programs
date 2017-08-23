var moment = require('moment');

console.log(moment().format());

var day = new Date();
var dayNum = day.getDay();              //current day number
weekday = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"];
var today = weekday[dayNum];
    console.log("Today is: " + today + ".");
var hours24 = day.getHours();
var minute = day.getMinutes();
var second = day.getSeconds();
var format = "AM";
var hours = hours24;
    if (hours >= 12){
        hours = hours24 - 12;
        format = "PM";
    }
    if (hours == 0) {
        hours = 12;
    }
    console.log("Current time is: " + hours, format + " : " + minute + ": " + second );

