function calculatecount(arr,item){
    let dic = [];
    arr.map(function(a){
        if(a === item){
            dic.push(a);
        }
    });
    return dic.length;
}

console.log(calculatecount([1,2,3,1],1));