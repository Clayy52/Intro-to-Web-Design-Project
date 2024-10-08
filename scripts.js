
//function to verify the password input
function verifyPW(){
//get the value stored in the input
let password = document.getElementById("pwinput").value;
//variables to store the conditions
let longenough = false;
let hasuppercase = false;
let haslowercase = false;
let hasspecialcharacter = false;
let hasspaces = false;


if(password.length >= 13){
    longenough = true;
}
// go through all the characters and determine if they fit the conditions
for(let i = 0 ; i<password.length ; i++){
    letter = password[i];
    if(letter == " "){
        hasspaces = true;
    }else if (letter == "!" || letter == "@" || letter == "#"  || letter == "$" || letter == "%"){
        hasspecialcharacter = true;
    }else if(letter == letter.toUpperCase()){
        hasuppercase = true;
    }else if (letter == letter.toLowerCase()){
        haslowercase = true;
    }
}
//reset the element to nothing once input is present
document.getElementById("PWstatus").innerHTML = "";
//update the element with the problems with the output
if(longenough == false){
document.getElementById("PWstatus").innerHTML += "PW not long enough<br>";
}
if(hasspaces == true){
    document.getElementById("PWstatus").innerHTML += "PW Has spaces<br>";
    }

if(hasuppercase == false){
document.getElementById("PWstatus").innerHTML += "No uppercase letter<br>";
}
if(haslowercase == false){
    document.getElementById("PWstatus").innerHTML += "No lowercase letter<br>";
    }
if(hasspecialcharacter == false){
        document.getElementById("PWstatus").innerHTML += "No special character<br>";
        }
if(longenough == true &&hasuppercase == true &&haslowercase == true &&hasspecialcharacter == true &&hasspaces == false){
    document.getElementById("PWstatus").innerHTML += "Password is Valid!<br>";
    
}


    
}

