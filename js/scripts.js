//addition
var add = function(number1,number2){
	return number1+number2;
};
//subtraction
var subractNumbers=(number1,number2)=>number1-number2
//multiplication
var multiplyNumbers=(number1,number2)=>number1*number2
//Division
var divideNumbers=(number1,number2)=>number1/number2
var number1=parseInt(prompt("Enter the first number:"));
var number2=parseInt(prompt("Enter the Second number:"));
var addResult=add(number1,number2)
var subtractResult=subractNumbers(number1,number2)
var multiplyResult=multiplyNumbers(number1,number2)
var divideResult=divideNumbers(number1,number2)
alert("Addition:"+addResult+"\nSubtraction:"+subtractResult+ "\nMultiplication:"+multiplyResult+"\nDivision:"+divideResult)
