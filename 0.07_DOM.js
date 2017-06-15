// DOM, Document object model
//alert("Happy Friday!!!");
// pop up box " Alert"
function hotels(name, rooms, booked){
	this.name=name;
	this.rooms=rooms;
	this.booked=booked;
	this.checkAval= function(){
		return this. rooms - this.booked
	};
}

var rri = new hotels(" Red Room Inn", 250,230);
var alex = new hotels(" Alexander", 500, 150);

var motel= [alex,rri];

function showAllHotelsInfo(){
	for( var h in motel){

	var hotelName= motel[h].name;
	var hotelHtmlText= document.createTextNode(hotelName);
	var listItem = document.createElement("li");
	listItem.appendChild(hotelHtmlText);
	document.getElementById( "hotels" ).appendChild(listItem);
}
} 

// document.getElementById grabs and object and picks it out
//  "appendChild" puts something inside of something
// document.createElement(" ") messes with a html tag
// "createTextNode" add stuff to a webpage

showAllHotelsInfo()