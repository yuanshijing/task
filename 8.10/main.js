function findNum(arr) {
    var dic = {};
    for (let i of arr) {
        dic[i] = typeof dic[i] ==='undefined'?1:dic[i] +1;
    }
    for (let item in dic) {
        if(dic[item] === 1){
            console.log(item);
            return;
        }
    }
}
findNum([5,5,1,2,1,2,3]);