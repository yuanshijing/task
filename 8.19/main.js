function abandRepeated(arr) {
    return [...new Set(arr)];
}

let arr =  ['s','a','s','b', 'a',1,'1',1];
console.log(abandRepeated(arr));