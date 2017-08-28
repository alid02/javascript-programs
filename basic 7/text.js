var random_num = Math.floor(Math.random() * 10) + 1;
console.log('random_num',random_num);
var number = window.prompt("Input number between 1 to 10 : ");
console.log('random_num:',typeof random_num, "number:",typeof number);
if (number === random_num.toString()){
    alert("Good work");
}
else {
    alert("Not matched");
}