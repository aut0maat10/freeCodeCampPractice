// factorialize a number

function factorialize(num) {
	var myNum = 1;
	for (i = 1; i <= num; i++) {
		myNum = myNum * i;
	}
	return myNum;
}
factorialize(5);