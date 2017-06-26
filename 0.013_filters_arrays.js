
var ages = [32, 33, 12, 40];


function check(ages){
	return ages >18
}
function file(){
	console.log(ages.filter(check))
}
// The word filter can check through an array and see if certain 
// stipulations are meet

file()
