function build_array(n){
    let array = [0,1];
    for (let i = 2;i<n;i++) {
        array.push(array[i-1] + array[i-2]);
    }
    console.log(array);
    console.log(array[n-1]);
}
//测试
build_array(15);
