//A Program to find 1st January is being a Sunday between 2014 and 2050.
for (year=2014; year<=2050; year++){
    var str = year.toString();
    var d = new Date(str);

    var day = d.getDay();

    if (day === 0){

    console.log("1st January  is sunday" + year);
}
}