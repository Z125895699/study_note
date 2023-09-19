
function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
var string = "Welcome to this Javascript Guide!";


var reverseEntireSentence = reverseBySeparator(string, "");


console.log(reverseEntireSentence);


