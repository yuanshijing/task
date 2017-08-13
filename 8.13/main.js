module.exports = function findMedian(arr) {
    arr = arr.sort();
    let num = Math.floor(arr.length / 2);
    let result = arr.length % 2 === 0?  (arr[num] + arr[num - 1]) / 2:arr[num];
    return result;
}
//console.log(findMedian([1,2,3,4,5,6]));