function deleteval(str,val){
    let result = [];
    let arr = str.split('->');
    for (let i of arr){
        if(i != val){
            result.push(i);
        }
    }
    result = result.join('->');
    return result;
}
console.log(deleteval('1->2->3->3->4->5->3',3));


