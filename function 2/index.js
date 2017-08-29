// checks whether a passed string is palindrome or not?
function palindrome(x) {
    str = x.toLowerCase().replace(/[^a-zA-Z0-9]+/g,"");
    var reverse_string = x.toLowerCase().replace(/[^a-zA-Z0-9]+/g,"").toString().split("").reverse().join("");
    console.log(reverse_string);
    if (str === reverse_string){
        console.log("it is palindrome");
    }
    else{
        console.log(x);
        console.log("not a palindrome")
    }
}
    console.log(palindrome("nurses run"));
    console.log(palindrome("madam"));
    console.log(palindrome("fox"));