function left_pad(str,length,item){
    while(str.length<length){
        str = item + str;
    }return str;
}
console.log(left_pad('hello',20,'1'))

