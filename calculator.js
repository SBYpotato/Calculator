// JavaScript Document
//Change Display
function d(val) {
	document.getElementById("d").value = val;
}

//Buttons for Modes
function night() {
	document.body.style.backgroundColor= "black";
	
}

function day() {
	document.body.style.backgroundColor= "white";	
}

//Type numbers and operators
function v(val) {
	document.getElementById("d").value += val;
}

// Evaluate the equation
function e() {
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("Error");
	}
}