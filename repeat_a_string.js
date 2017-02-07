// repeat a string

function repeatStringNumTimes(str, num) {

var myString = "";
while (num > 0) {
	myString += str;
	num--;
	}
	return myString;
}
repeatStringNumTimes("abc", 3); // abcabcabc

// or:

function repeat (str, num) {
	if (num > 0) {
 		return str.repeat(num);
	} else {
		return "";
	}
}
repeat("abc", 3); // abcabcabc