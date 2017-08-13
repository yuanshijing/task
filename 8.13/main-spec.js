'use strict'
const findMedian =require('./main.js');

describe('median',() => {

    it('数组长度为奇数',() => {
        //GIVEN 
        let arr =[1,2,3,4,5,];
        //WHEN
        let result = findMedian(arr);
        //THEN
        expect(result).toEqual(3);
    })
    it('数组长度为偶数',()=>{
        let arr = [1,2,3,4,5,6];
        let result = findMedian(arr);
        expect(result).toEqual(3.5);
    })
})