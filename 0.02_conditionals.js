//conditionals

/* Bullion operators
> greater than
< less than
>= Greater or Equal
<= Less or equal
== Equal to
=== Strictly equal to
! Not
!= Not equal to
*/

console.log(1 > 3); //false
console.log(10 != 10); //false
var name = "kenn";

console.log(name == "kenn"); //true
console.log(6 == "6"); //true
console.log(6 === "6"); //false

//if statements
/*   if( boolean expression){
	Then do this, if ^ true ( some code)
} else if(Boolean expression){
	somecode
}else{	
}
*/



if (200/2 === 100) {
	console.log(" Yeah buddy")
}

var userName="admin";
var passWord="test123";
if (userName == "admin" && passWord =="test123") {
	console.log(" You have been granted access!");
}else{
	if(userName === "admin"){
		console.log(" Password is wrong")
	}
	else {
    console.log(" userName is incorrect")
	}
	}

	/* To add things together in boolean
  && and
  || */

	var age= 20

	if (age>= 35){
		console.log("You can vote and hold any place in goverment!")
	} else if( age>= 25){
		console.log("You carn run for senate!")
	} else if (age >= 18){
		console.log("You can vote!")
	}else {
		console.log("You're out of luck")
	}
//Rarest condition first, one that least likely to happen first. Because it stops when it becomes true

var age1= 3

if(age1==0){
	console.log("You are a baby")
} else if(age1==1){
	console.log("You are on your journey to man hood")	
} else if(age1 ==2){
	console.log("You should be in school already")
} else if (age1==3){
console.log("You should be graduating high school")
} else{
	console.log(" If your not between 1-3 you should have a job")
}

var C=0
var p=2

if(C>p){
	console.log("Hah Suck my left big toe hair")
} else if(C<p){
	console.log(" The refs where hired by the patriots!!")
} else if(C==p){
	console.log(" You better be happy our quaterback got hurt!")
}else {
	console.log(" You guys are lucky today!")
}
 for(var i = 0 ; i<= 100; i++){
	if( i % 3 == 0 && i % 5 == 0){
		console.log("fizzBuzz");
	}else if(i % 3 == 0){
		console.log("Fizz");
	}else if(i % 5 == 0){
		console.log("Buzz");
	} else{
		console.log(i)
	}
}


/*var num=1;

while(num < 101){
	if (num % 5 == 0 && num % 3 ==0){
		console.log("fizzBuzz");
	} else if( num % 5 ===0){
		console.log("buzz")
	} else if(num % 3 ==0){
		console.log("fizz")
	}else{
		console.log(num)
	}
	num=num+1;
}*/

