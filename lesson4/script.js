// initialize a variable
var x = 1

// get the element from the document that has the id of "my-div"
var element = document.getElementById('my-div')

// every second 
setInterval(function () {
	
	
	// Increment by 1
	x = x * 2

	// update the value in the html
	element.innerHTML = x


	if (x > 1000) {
		console.log('YOOOOO WE SURPASSED 1000')
	}


}, 1000)
