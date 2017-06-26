/*
Closures essentially functions
	variables inside of functions cannot be used outside normally
	but with closures a variable inside of a function can be used gobally
	closures are just definition for a variable inside a function that can only 
	be used calling the function
*/
var init= function(){
	var name='Summer';
	function displayName(){
		console.log(name)
	}

	displayName();

}
init()

var friend= {}

var setAge= function(myage){
	//here is our closure
	var birthday = '5/16/2017'
	return { 
		getAge: function(){
			console.log(myage);
			return myage
		}
	}
} 

/* var friend ={
	age =function(){
	  //setting the age
	  getAge()
	  //returning the age
	}
}

*/
friend.age= setAge(55)
console.log(friend.age)
console.log(friend.age.getAge())
