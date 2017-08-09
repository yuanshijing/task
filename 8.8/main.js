function prime(n) {
    let i = 2;
    let a = 1;
    let result=`${n}=`;
    while (a) {
        if (n == i) {
            result += i;
            a = 0;
        } 
        else if (n % i == 0) {
            result += i;
            n = n / i;
        } 
        else {
            i = i + 1;
        }
    }
    console.log(result);
}

//test
prime(90);