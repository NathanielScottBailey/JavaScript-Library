//Intro into objects, Object literal
var empObject= {};

var johnQualls= {
	//key       : value             use commss after stuff in a object
	name        : "johnQualls",
	age         : 39,
	hairColor : "brown hair"
};
// Use an dot operator to retrieve from objects
// dots open up things that come before it
console.log(johnQualls)
console.log(johnQualls.name)
console.log(johnQualls.name + " is of the age" + " " + johnQualls.age)
johnQualls.height = "6ft";
console.log(johnQualls);
//create an animal object with the properties of type, weight, common in Indiana, and habitat;

var animal = {
	habitat    :"Woods" ,
	noise      :"He calls to us"
}
animal.type= "turkey"
animal.weight="50lbs"
animal.common=" Common in Indiana"
console.log(animal)

// Another way to add stuff to an object

console.log(animal["habitat"]);
animal["nickname"]= "winnie";
 
 console.log(animal["nickname"]);

 //Reassigning Values
animal.type=" moose";
console.log(animal);

//change the weight of an animal property using square bracket notation
//Then add an arrray property of moviesabout me rocky & bullwinkle, monty python
//National lampoons vacation
animal.weight = " 1200lbs"
console.log(animal)
animal.movies=["rocky & bullwinkle", "monty pythoNational" , "lampoons vacation"]
console.log(animal)

//Calling out the keys
console.log(Object.keys(animal))

//Methods, functions and methods are interchanged

var bryce={
	name       : "Bryce Greene",
	age        : 35,
	vocation   : "TA",
	email      : "Thebryceisright@gmail.com",
	greeting   : function(){
		console.log("Greetings Earthlings!!"+ " " + " I am" + " " + this.name + " I am here to learn.");
	}
} 
//" this " picks a key out of a object, instead of using the object name.(key)
//Always have commas after objects rows
console.log(bryce)

bryce.greeting()
// Cannot do line 67 becasue your 2x console.loging
//console.log(bryce.greetings())


//create a method for contactme and include the email property in a return statement

var contactMe= {
	num      : 689,
	time     : " Call around 3",
	email    : function(){
		return("brianandrose3@gmail.comg")
	},
		
	hi       : function(){
		var story = "Hi my name Is  Nathan, here is my email,"
		 console.log( story + this.email())
		}	
	}
contactMe.hi()

//oject contstuctor
var paul= new Object;
//same as var paul={}
console.log(paul)
paul.name = " Paul o' Connor";
paul.vacation = " Curriculum"
paul.hobbies = [ "rocking out code", "listening to good music", "baking banana muffins"]
console.log(paul)


// Object constructor template
function hotel( name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvaliability = function(){
	return " There are" + " " + (this.rooms - this.booked) + " " + "rooms left"
}}
var jw= new hotel("Jw marriot", 300, 250);
var jwexp= new hotel(" Mini j' Dubs", 100, 50)
console.log(jwexp.checkAvaliability())
// The "new" key word creates something new, and helps a cookie be cut

var hotels = [jw, jwexp]
console.log(hotels[1].name)


for (var z in hotels){
	console.log( hotels[z])
}

var bob = {
	tall1: 10,
	show: ["t","v","e","d","p"],
	tall: function(){
		return( this.tall1 )}


	var tod() = {
	hair: "black",
	show: ["c","s","e","p","r"],
	hair1: function(){
		return( this.hair)}}

	shoesize: 10,
	show: ["c","v","e","d","r"],
	shoesize1: function(){
		return(this.shoesize)
	},
	movief: function(){
		for(var i in )
	}
}


/*var jack = {
	height: "10'",
	weight:  "100lbs",
	color: "blue",
	height1: function(){
		return(this.height+1)
	}
}
var steve = {
	height: "10'",
	weight:  "100lbs",
	color: "yellow",
	height1: function(){
		return (this.height+1)
}}
var rodger = {
	height: "10'",
	weight:  "100lbs",
	color: "green",
	height1: function(){
		return (this.height+1)
	}
}
var putta= {
	height: "1000'",
	weight:  "10lbs",
	color: "green",
	height1: function(){
		return (this.height+1)
}}
var dog = {
	height: 10,
	weight:  "100lbs",
	color: "green",
	height1: function(){
		return (this.height + 12) },
	movies: ["willy wonka","steve","boob","all","chicken butt"],
}
console.log(dog.movies)*/
/*function dave(age,height,weight,show) {
	this.age=age
	this.height=height
	this.weight=weight
	this.show=show
	this.freedom= function(){
	console(this.age + "weight is" + this.weight+ " and his height is" + this.weight)
}}
var cat= new dave(10, 20,30, ["a","b","c","d","e",])
//console.log(cat.show)

var pupper= new dave(10, 20,30, ["o","b","e","d","e",])

var dog= new dave(10, 20,30, ["a","b","z","x","e",])

function show( ){
	for(var wumbo in cat.show){
		re(cat.show[wumbo])
	}
	for(var doggo in dog.show){
		return(dog.show[doggo])
}

var hat= dog.show[wumbo]
var pat= cat.show[doggo]
console.log(hat)
*/







