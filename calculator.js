//this code is prepared for the students want to practice basic javascript functions.
//the following variables "a" and "b" use to store the first and the second input and varible "opr" stors the operator value.
var a;
var b;
var opr="";
//the following functions called by the event handler from the html onclick function for each button, on the oncklic event they collect the value of the input box and add the value of the button and put the result in the inputbox box.
function one1(){

document.getElementById("input1").value =  

document.getElementById("input1").value
+ document.getElementById("one1").value;
}

function two2(){

document.getElementById("input1").value =  

document.getElementById("input1").value
+ document.getElementById("two2").value;
}

function three3(){

document.getElementById("input1").value =  

document.getElementById("input1").value
+ document.getElementById("three3").value;
}

function four4(){

document.getElementById("input1").value =  

document.getElementById("input1").value
+ document.getElementById("four4").value;
}
function five5(){

document.getElementById("input1").value =  

document.getElementById("input1").value
+ document.getElementById("five5").value;
}

function six6(){

document.getElementById("input1").value =  

document.getElementById("input1").value
+ document.getElementById("six6").value;
}

function seven7(){

document.getElementById("input1").value =  

document.getElementById("input1").value
+ document.getElementById("seven7").value;
}

function eight8(){

document.getElementById("input1").value =  

document.getElementById("input1").value
+ document.getElementById("eight8").value;
}

function nine9(){

document.getElementById("input1").value =  

document.getElementById("input1").value
+ document.getElementById("nine9").value;
}

function zero0(){

document.getElementById("input1").value =  

document.getElementById("input1").value
+ document.getElementById("zero0").value;
}
//this function clear the input box

function cancel(){

document.getElementById("input1").value =""; 


}
//the following functions prepare the input value by assigning the first variable "a" with the input value and assign the oprater variable "opr"  
function plus (){
a=document.getElementById("input1").value;
document.getElementById("input1").value="";
opr=document.getElementById("plus").value;

}

function minus (){
 a=document.getElementById("input1").value;
document.getElementById("input1").value="";
opr=document.getElementById("minus").value;

}

function times (){
a=document.getElementById("input1").value;
document.getElementById("input1").value="";
opr=document.getElementById("times").value;

}
function divide (){
a=document.getElementById("input1").value;
document.getElementById("input1").value="";
opr=document.getElementById("divide").value;

}

//this function perform the operation by assigning the second variable with the input value and convert both the first and the second varible value from string to number then the if condition will look to the operator variable "opr" value and perform the operation accordingly.
function equal (){
 b=document.getElementById("input1").value;
 var d=parseFloat(a);
 var e=parseFloat(b);
if (opr=="+")
{document.getElementById("input1").value=e+d;}
else if(opr=="-")
{document.getElementById("input1").value=d-e;}
    
else if(opr=="*")
{ document.getElementById("input1").value=d*e;}

else if(opr=="/")
{ document.getElementById("input1").value=d/e;}
else {alert("error");}

}