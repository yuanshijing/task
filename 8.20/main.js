function maxTimes(str) {
    let cnt = {};
    let dic = [];
    let arr = str.split('');
    arr.forEach((i) =>{
        if (cnt.hasOwnProperty(i))
            cnt[i]++;
        else {
            cnt[i] = 1;
            dic.push(i);
        }
    });
    let max = cnt[dic[0]];
    dic.forEach((i) =>{
        if (cnt[i] > max)
            max = cnt[i];
    });
    let result = {};
    dic.forEach((i) =>{
        if (cnt[i] == max)
            result[i] = max;
    });
    return result;
}
console.log(maxTimes('aaaaabbdbdbb'));
console.log(maxTimes('abcsbaddbizdbas'));