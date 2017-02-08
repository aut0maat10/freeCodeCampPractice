// chunky monkey

function chunkArrayInGroups(arr, size) {
	var munki = [];
	var i = 0;
	while (i < arr.length) {
		munki.push(arr.splice(0, size));
	}
	return munki; 
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); 

					// [["a", "b"],["c", "d"]]

// OR USING SLICE:

function chunkArrayInGroups(arr, size) {
	var munki = [];
	var position = 0;
	while (position < arr.length) {
		munki.push(arr.slice(position, position += size));
	}
	return munki;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); 

					// [["a", "b"],["c", "d"]]