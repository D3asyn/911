function f(s) {
	//console.log(s);
	//document.querySelector("#out").innerHTML = s.split("").reverse().join("");
	document.getElementById("out").innerHTML = s;
}

function add() {
	const num1 = parseFloat(document.getElementById("num1").value);
	const num2 = parseFloat(document.getElementById("num2").value);

	if (isNaN(num1) || isNaN(num2)) {
		alert("Please enter a valid number");
		return;
	}
	document.getElementById("out").innerHTML = num1 + num2;
}
