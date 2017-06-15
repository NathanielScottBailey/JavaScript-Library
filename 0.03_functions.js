//functions

/*


	function name_of_Function(){
	

	}

	*/
//Declaring the function
function greeting(){
	var name= "kenn";
	console.log(name + " says\"Hello boi!\"");
}
//inside a variable always use var when naming a variable unless you want it to be global
// Calling the function
greeting()
var weather1="sunny"
function weather(){
	console.log("Today it is going to be really sunny and warm");
	console.log(weather1)
}
weather();



// Functions with parameters

function shoes(brand){
	console.log("Man those" + " " + brand + " " + "are on fleek!");
}
shoes("Crocs")
// void functions with multiple parameters
function add(num1, num2){
	console.log( num1 +num2)
}

add(34, 20)
//void functions, gives nothing back to us

//functions that return data
function sum(num1, num2){
	return num1 + num2
}

sum(20,20)
var answerTOQuestion = sum(23,17)

function mult(x,y){
	return x * y;
}
function div(x,y){
	return x / y;
}
function mod(x,y){
	return x % y;
}
function sub(x,y){
	return x - y;
}
console.log( mult(3,4), div(6,3), sum(2,3), mod(3,2), sub(3,2))

function happy(){
	console.log(" Hi"+" "+ " I am happy")
}
happy()

function bills( water, electric, tv) {
	var hop= water + electric + tv;
	console.log(hop + " " + "Wow thats not much!")
}
bills(2,3,9)

function gold(sodas){
	var price= sodas * 0.99 
	price= price + price * 0.07
	console.log( sodas + " Cokes will cost you" + " "+ price + "$'s")
}
gold(5)

// create a calculator that accepts 3 arguments 2 numbers and 1 operator
// ex. calculator(2*,2) >> this should return 4
// hints you will need to use conditionals!!


function calculator(first,op, second){
// when dealing with else if statements, the original if does not have to wrap them
	if(op == "+"){
		return( first + second)
	}else if(op == "*"){
		return( first * second)
	}
	else if( op == "/"){
		return( first / second)	
	}
	else if( op == "-"){
		return( first - second)
	
	}else if( op == "%"){
		return( (second / first) )
	}
	
	else {
		return( "That is not a calculator function, Please try a operator")
	}}

 console.log(calculator(25,"hi",10))