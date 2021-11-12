// Answer 1 //
/* var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName + " " + lastName;
alert("Hello " + fullName); */

// Answer 2 //
/* var modelName = prompt("Enter your favourite mobile phone model");
document.write("My favourite mobile model is: " + modelName + "<br>" 
                  + "string of length: " + modelName.length  );
 */

// Answer no 3 //
/* var string = "Pakistani";
document.write( string + "<br>" + "Index of n: " + string.indexOf('n'));  */

// Answer 4 //
/* var string = "Hello World";
document.write(string + "<br>" + "last index of l: " + string.lastIndexOf('l'));
*/

// Answer 5 //
/* var string = "Pakistani";
document.write( string + "<br>" + "character at index 3: " + string.charAt(3)); */

// Answer 6 //
/* var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName.concat(" ",lastName);
alert("Hello " + fullName);
 */

// Answer 7 //
/* var city = "Hyderabad";
document.write("before replacement: " + city + "<br>");
city = city.replace('Hyder', 'Islam');
document.write("after replacement: " + city);
 */

// Answer 8 //
/* var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("before replacement: " + message + "<br>");
message = message.replaceAll('and', '&');
document.write("after replacement: " + message); */

// Answer 9 //
/* var num = "472";
document.write("value: " + num + "<br>" + " type: " + typeof(num));
num = parseInt(num);
document.write("<br> value: " + num + "<br>" + " type: " + typeof(num)); */

// Answer 10 //
/* var input = prompt("Enter your input");
document.write("user input:" + input);
document.write("<br> uppercase:  " + input.toUpperCase()); */

// Answer 11 //
/* var input = prompt("Enter your input");
document.write("user input:" + input);
document.write("<br> titlecase:  " + input.slice(0,1).toUpperCase() + input.slice(1)); 
 */

// Answer 12 //
/* var num = 35.36 ;
document.write("Number:" + num);
num = num.toString();
num = num.replace(".", "")
document.write( "<br> Result: " + num);
 */

// Answer 13 //
// 1st method
/* var name = prompt("Enter your name");
if(name.includes(".") || name.includes("!") || name.includes("@") 
      || name.includes(",")){
    alert("please enter valid name");
} else{
    alert("hello " + name);
} */
// 2nd method
/* var name = prompt("Enter your name");
for (var i = 0; i< name.length; i++){
    if(name[i] === ".", "@" , "!" , ","){
        alert("please enter valid username");
        break;
    }
    
} */
// Answer 14 //
/* var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("hello there what do you want to order?").toLowerCase();
var flag = false
for(var i = 0; i < A.length; i++){
    if(search ===  A[i]){
        flag = true;
        alert(search + " is available at index " + i + " in the bakery ");
    }
} 
if(flag === false){
    alert("Sorry " + search + " is not available in the bakery ");
}
 */

// Answer 15 //
/* var password = prompt("Enter your password");
if(password.includes(Number, string, )){
    alert(password);
} */
// Answer 16 //
/* var university = "University of Karachi";
university = university.split("");
for(var i = 0; i < university.length; i++){
    document.write(university[i] + "<br>");
} */

// Answer 17 //
/* var input = prompt("Write user input");
document.write(input.charAt(input.length-1)); */

// Answer 18 //
/* var string = "The quick brown fox jumps over the lazy dog";
document.write("text:" + string + "<br>");
string = string.toLowerCase();
document.write("There are " + string.match(/the/g).length + " occurences of word the"); */

