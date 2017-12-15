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
			document.getElementById("2").style.backgroundColor="green";
			document.getElementById("2a").style.backgroundColor="green";
			document.getElementById("2b").style.backgroundColor="green";
			document.getElementById("2c").style.backgroundColor="green";
			document.getElementById("2d").style.backgroundColor="green";

}

function night() {
	document.body.style.backgroundColor= "black";
	document.body.style.color="white";
		document.getElementById("1").style.backgroundColor="orange";
		document.getElementById("1a").style.backgroundColor="orange";
		document.getElementById("1b").style.backgroundColor="orange";
		document.getElementById("1c").style.backgroundColor="orange";
			document.getElementById("2").style.backgroundColor="grey";
			document.getElementById("2a").style.backgroundColor="grey";
			document.getElementById("2b").style.backgroundColor="grey";
			document.getElementById("2c").style.backgroundColor="grey";
			document.getElementById("2d").style.backgroundColor="grey";
			
}