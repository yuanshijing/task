function findIndex (arr,item) {
    let result = [];
    arr.filter((value,index,arr) => {
        if(value === item) {
            result.push(index);
        }
    })
    return result;   
}

console.log(findIndex([1, 3, 7, 1 ,4,],1));