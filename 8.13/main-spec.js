'use strict'
const findMidian =require('./main.js');

descrbe('midian',() => {

    it('数组长度为奇数',() => {
        //GIVEN 
        let arr =[1,2,3,4,5,];
        //WHEN
        let result = findMidian(arr);
        //THEN
        expect(result).toEqual(3);
    })
    it('数组长度为偶数',()=>{
        let arr = [1,2,3,4,5,6];
        let result = findMidian(arr);
        expect(result).toEqual(3.5);
    })
})