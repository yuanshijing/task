function left_pad(str,length,item){
    let result = str;
    while(result.length<length){
        result += item;
    }return result;
}
console.log(left_pad('hello',20,'1'))

