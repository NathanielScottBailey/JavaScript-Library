var fs= require('fs');

/* 

	request= prepare_the_request();
	send_request_asychronously (request, function(response){
	display(response);
	})
					this is a call back
*/

//getbulls([path], callback)
function getBulls(filepath, done){
	//Telling file system to read a file that the user of the function passes into
	//as a argument, then we are creating a callback to handle the case.
	fs.readFile(filepath, function(err, bulls){
		//readFile( can print out err ^^) err is a boolean expression
		if(err) return done(err);

		fs.readFile('0.09_bulls.dictionary', function(err, dict){
		  	if(err) return done(err);
		  		compareBulls(bulls,dict);
		  	//do some logic here
		})
	})
	var compareBulls= function(bulls, dict){
	//turn the items from these files into arrays then split them up
	dict = dict.toString().split('\n');
	bulls= bulls.toString().split('\n').filter(function(bulls){
		// Going over the dictionary, then its checking if the bulls are located
		//inside of the dictionary. If it is then it's returning that value
		return dict.indexOf(bulls) !== -1
		//indexOf refers back to data and not just numbers
	});
	done(bulls);
}
}
// variable way to write fuction


getBulls('0.09_bulls.txt', function(bulls){
		console.log(bulls)
	})


//Another example of callback

console.log("Hey tell me your name?")
var printNameInThreeSeconds = setTimeout(function(){
	console.log("Bryce");
}, 3000);
console.log("nice to meet you!")







