//Array

// []
//              0       1       2       3.      4
var students = ["John", "Nate", "Rose","Caitlyn","Kay"];
console.log(students)

console.log(students.length)
console.log(students[0]);

//adding on to an array

students[5]="nick"
console.log(students)

// ".push()" to also add on the end of an array
students.push("Aaron")
console.log(students)

// ".pop"



// For each loop. For each object in this date do this to it

for(var s in students){
	console.log(students[s] + " is in the position"+ students)
}
//easier way of saying
for(var s in students){
	var uppercase = students[s].toUpperCase()
	console.log(uppercase + " is in the position"+ students)
}
var num = [1,2,3,4,5,6,7,8,9,10]
for( var x in num){
	console.log( x + " Hey " + x)
}
// creating a for loop that pushes numbers into a empty array
 
var numArray= [];
for( var num = 1; num < 11; num++){
	numArray.push(num);	
   }
 console.log(numArray)

   //Mixed arrays

   var ranThings=[ 'bryce' , 45, "summer", true, [] ];
   console.log(ranThings)


var hobbies=[ "skiing","sleeping","eating","tv"]


var cars= ["ford","chevy","dodge"]
for(var i in cars){
	console.log(cars[i])
}
var happy=[ ["pie,happy"], ["cat,mad"], ["dog,pee"]]

for( var tot in happy){
	for( var dog in happy[tot]){
		console.log(happy[tot][dog])
	}

}

var dog=[]
for(i=0; i<=15; i++){
 console.log(15)

}
console.log(dog)
