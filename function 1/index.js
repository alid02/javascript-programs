function integer(x) {


  var srt =  x.toString().split("").reverse().join("");

  return srt;


}
console.log(integer(223456));