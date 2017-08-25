function findPut(arr,elem){
	let result = arr.filter((i) => i!== elem);
	let add = arr.filter((i) => i === elem);
	add.map((i) =>result.push(i));
	return result;
}

let arr = [0, 1, 0, 3, 12];
let elem= 0;
console.log(findPut(arr,elem))