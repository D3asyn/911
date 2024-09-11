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

var bl1 = [];

function remove(x) {
	bl1.splice(bl1.indexOf(x), 1);
	console.log("removed");

	document.querySelector("#lista").innerHTML = bl1
		.map(
			(elem, i) =>
				`<li class="x${i % 2}">${elem}</li><button onclick="remove('${elem}')">Remove</button>`,
		)
		.join("");
}

function lista(x) {
	bl1.push(x.value);
	bl1.sort();
	x.value = "";
	document.querySelector("#lista").innerHTML = bl1
		.map(
			(elem, i) =>
				`<li class="x${i % 2}">${elem}</li><button onclick="remove('${elem}')">Remove</button>`,
		)
		.join("");
}
