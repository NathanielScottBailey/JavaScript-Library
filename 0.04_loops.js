/* 4 types of loops:
   do while loop
   while loop
   for loops
   for in loops
   */


//Do while loop, run once the check if true, no infinite loop, unless line 19
/* 
 (Need to have a control var)
 ex:
		 lcv=0
		  do{
		  	lcv= lcv +1
			// some code goes here
			} while( This boolean expression should equal true or false)

// cannot put conditions on the inside of loops*/

var b= 0;
 do{
	b = b + 2;
	console.log(b)
 } while(b <=18);

var c = 10
 do{
 	c= c-1 
 	console.log(c)
 } while( c > 0)

 //While loop
/*
lcv=0
while(true || false){
	do this while this is true
 }*/

var countdown = 10
while(countdown > 0){
	countdown--
	if (countdown== 0){
		console.log("Blast Off!!")
	} else{
		console.log(countdown)
	}
}

//For loop
/*
	for( i=0; i< a number; i += a number){
	//code here
	}
	*/
for(apples= 0; apples<= 10; apples++){
	if(apples == 10){
		console.log("You will never have to go to the doctor")
	} else{
		console.log(apples)
	}

	}
