$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * booFactsArray.length));
	$("#factText").text(booFactsArray[number])
})

var booFactsArray = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books"]

//When the textPink button is pressed...
$("#textPink").on("click", function() {
    //Change funText to pink.
	$("#funText").css("color", "pink")
})

$("#textOrange").on("click", function() {
$("#funText").css("color", "orange")
})
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})

//When the boxGrow button is clicked...
$("#boxGrow").on("click", function() {
    //Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})