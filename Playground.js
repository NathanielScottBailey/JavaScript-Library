/*var jack = [ ["happy"], ["yea buddy, nigga, white "], ["not happy, dog"]]
for(var two in jack){
	for( var i in jack[two]){
		console.log(jack[two][i])
	}
}*/
var Dug = {
	movie: ["mouse","house","trash","mash"],
	nat: function(){ 
		for( var i in Dug.movie){
			for(var e in Man.movie){
		if( Dug.movie[i] == Man.movie[e]){
			console.log(" Here are the movies Dug and Man have in common:" + " " + Dug.movie[i]);
		} else{
			console.log(" There are no matches")
		} }  }
 }

}

var Man={
	movie: ["mouse","hous","tras","mash"],
}
Dug.nat()

/*var mut =[ ["happy","howdy", "imma beast"], ["yea buddy, nigga, white "], ["not happy, dog"]]
for(i=2; i<3; i++){
	for(var e in mut[i]){
		console.log(mut[i][e])
	}
}
var bop={
	jump: 100,
	weight: 200,
}
console.log(bop)
bop.jump=30
console.log(bop)
bop.distance=100
console.log(bop)

var pop= 19;
do{ 
	pop++
	console.log(pop);
} while(pop<30);*/