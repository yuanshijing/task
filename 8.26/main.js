function fizzbuzz(n) {
	if(n % 3 === 0) {
		console.log('fizz');
	}else if(n % 5 === 0) {
		console.log('buzz');
	}else if(n % 3 === 0 || n % 5 === 0) {
		console.log('fizzbuzz');
	}else {
		console.log(n);
	}
}

fizzbuzz(1);
fizzbuzz(2);
fizzbuzz(3);
fizzbuzz(4);
fizzbuzz(5);
