// this code will tell you which category of income are you
//base on your age 
let age = prompt("input your age!");

//above is a prompt where you will inpuut your age value

if (age >= 65){ 
alert("you get your income from your pension")
 }
 //the above code is an if statement, 
 //it means if your age is greater than or equal to 65
 //then you will get alerted that "you get your income from your pension"

 else if (age < 65 && age >= 18) {
    alert("Each month you get salary")    
 }
 // this is an else if part when your age is not greater than or eqaul to 65 
 // then it wiil  check if age is less than 65 or if your age is greater than or eqaul to 18
 // at last when it founds your age between 18 and 65 you will be alerted that "each month you get salary"

 else if (age < 18) {
    alert("you get pocket money from your parents")  
 }
 
 else if (age < 65 && age <= 15){
    alert("you will be taken care off by your parents")
 }
 // this part is an else if statement 
 //  this part check if all  the above didn't work 
 //  this code ill run if your age is less than 18
 //  when your age is less than 18 you will be alerted that "you get an allowance" 
 else {
    alert("the value of the age is not numeric");
   
 }
 //this part will check if your prompt(what you enter as your age) is not number.






