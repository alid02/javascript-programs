year = window.prompt("Input a Year : ");

function leapYear(year){
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)
}
//console.log(leapYear(year));
alert(leapYear(year));



