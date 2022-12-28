// Prompt the user for a number and save it to a variable.
let enterNumber=prompt("Enter a number: ");
/*
Check whether the variable is even or odd.
If it is even, display: “x is an even number”. Where x is the actual number the user chose.
If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
*/

if (enterNumber % 2==0){
    alert(enterNumber+" is an even number")
}else{
    alert(enterNumber+" is an odd number")
}
