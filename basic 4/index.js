//Write a JavaScript program to rotate the string  in right direction by periodically removing one letter from the end of the string and attaching it to the front
function animation_string(id) {
    var element = document.getElementById(id);
    var name = element.childNodes[0];   //element.childNodes[0] will produce the same result as the HTML content of the first child node.
    var string = name.data;

setInterval(function(){
    string = string[string.length - 1] + string.substring(0, string.length -1);
    name.data = string;
},100);
}