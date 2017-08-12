function flowernum() {
    let result = [];
    for (let i = 100; i <= 999; i++) {
        let dic = i.toString().split('');
        let sum = 0;
        for(let num of dic){
            sum += Math.pow(num, 3);
        }
        if (i == sum) {
            result.push(i);
        }
    }
    return result;
}

console.log(flowernum());



