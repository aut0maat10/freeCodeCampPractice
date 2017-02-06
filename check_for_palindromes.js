// Check for palindromes

function palindrome(str) {
	var re = /[\W_]/g;
	var lowRegStr = str.toLowerCase().replace(re, "");
	var reverseString = lowRegStr.split("").reverse().join("");
	return reverseString === lowRegStr;
}

palindrome("never odd or even");  // true