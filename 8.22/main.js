function intersect (num1,num2){
    return num1.filter((x) =>num2.includes(x));
}

console.log(intersect ([1, 2, 2, 1], [2, 2]));