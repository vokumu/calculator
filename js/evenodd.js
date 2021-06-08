function evenNumberCalculator(number){
	if(number%2==0){
  alert(number+" is an even number")
  }
  else{
  alert(number+" is an odd number")
  }
}
var userInput=parseInt(prompt("Please enter a number: "))
evenNumberCalculator(userInput)