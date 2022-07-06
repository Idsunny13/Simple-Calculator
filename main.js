let display = document.getElementById('inputext');

let calculate = (number) => {
	display.value += number;
}

let result = () => {
	try {
		display.value = eval(display.value)
	}
	catch(err) {
		alert('Enter a valid input')
	}
}


	
