// Write a JavaScript program to get the current date.Expected Output : mm-dd-yyyy,
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var currentDate = day + "/" + month + "/" + year;
// console.log(document.getElementById("date"));
// document.getElementById("date").innerHTML = currentDate;
document.getElementById('date').innerHTML = currentDate ;