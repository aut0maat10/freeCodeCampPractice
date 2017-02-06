// Title Case a String

function titleCase(str) {
	var myStr = str.toLowerCase().split(" ");
	for (i = 0; i < myStr.length; i++) {
		myStr[i] = myStr[i].charAt(0).toUpperCase() + myStr[i].slice(1);

	}
	return myStr.join(" ");
}

titleCase("My hovErcraft is full oF eELs"); 

// "My Hovercraft Is Full Of Eels"