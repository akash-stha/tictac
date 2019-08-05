var a = [3, 4, 20, 7, 8, 9,1,10]

function calc() {
	for (var i = 0; i < a.length; i++) {
		for (var j = 0; j < a.length; j++) {
			var result = a[i] * a[j + 1];
			if (result == 20) {
				console.log(a[i]);
				console.log(a[j + 1]);
				return;
			}
		}
	}
}

calc();