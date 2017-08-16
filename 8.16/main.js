function findRepeated(arr){
    arr = arr.filter((str) => arr.indexOf(str) != arr.lastIndexOf(str))
    return Array.from(new Set(arr));
}

let arr = ['a','ab', 'ed', 'da','a', 'ed', 'b']
console.log(findRepeated(arr));