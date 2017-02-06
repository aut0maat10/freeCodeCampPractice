// Find longest word

function longestWord(str) {
	var strSplit = str.split(" ");
	var longestWord = 0;
	for (i = 0; i < strSplit.length; i++) {
		if (strSplit[i].length > longestWord) {
			longestWord = strSplit[i].length;
		}
	}
	return longestWord
}

longestWord("My hovercraft is full of eels"); // 10