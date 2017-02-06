// reverse a string

function reverseString(str) {
	var splitString = str.split("");
	var reverseString = splitString.reverse();
	var joinString = reverseString.join("");
	return joinString;
}

reverseString("automaatio"); // oitaamotua