// JavaScript Document
//Change Display
function d(val) {
	document.getElementById("d").value = val;
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

function day() {
	document.body.style.backgroundColor= "white";
	document.body.style.color="white";
		document.getElementById("1").style.backgroundColor="red";
		document.getElementById("1a").style.backgroundColor="red";
		document.getElementById("1b").style.backgroundColor="red";
		document.getElementById("1c").style.backgroundColor="red";

}

function night() {
	document.body.style.backgroundColor= "black";
	document.body.style.color="white";
		document.getElementById("1").style.backgroundColor="orange";
		document.getElementById("1a").style.backgroundColor="orange";
		document.getElementById("1b").style.backgroundColor="orange";
		document.getElementById("1c").style.backgroundColor="orange";
}