function findPut(arr,elem){
	let result = arr.filter((i) => i!== elem);
	arr.filter((i) => i === elem).forEach((item) =>result.push(item));
	return result;
}

let arr = [0, 1, 0, 3, 12];
let elem= 0;
console.log(findPut(arr,elem))