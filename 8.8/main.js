function prime(n) {
    let i = 2;
    let result=`${n}=`;
    while (i) {
        if (n == i) {
            result += i;
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