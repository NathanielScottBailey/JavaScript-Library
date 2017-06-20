/*
	iffe= Immediatly-invoked Function epression
	declaring and running a fuction at the same time

*/
//semi colons very important
(function printNum(){
	var a = 5;
	console.log(a);
})();

//semicolon before iffe function, because the parenthesis before it thinks the line above is 
//with it

// this one you have to call the function for it to run
function printName(){
	var name = "John";
	console.log(name)
}
printName();

//for a challeng create an iffe that counts from 1-10


(function counting(){
var i= 0
	do{i ++
		console.log(i)
	} while(i<10)
		
	
})()









var smartCar = {}
function smartCarMPG(totalMiles,totalGallons){
// var smartCarMPG = function(totalMiles, totalGallons){
	return{
		calculateMpg: function(){
			console.log("MPG:"  + " " + totalMiles/totalGallons);
			return totalMiles / totalGallons;
		}
	};
};

smartCar.mpg = smartCarMPG(30, 15);
console.log(smartCar.mpg);
console.log(smartCar.mpg.calculateMpg());