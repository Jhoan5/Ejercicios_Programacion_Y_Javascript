// forma 1
const unirArray = (arr1,arr2)=>(arr1.concat(arr2).reverse());

let arr1 = [1,2,3,4];
let arr2 = ['uno','dos','tres','cuatro'];
let arr3 = [null,true,false,Infinity];

console.log(unirArray(arr1,arr2));
console.log(unirArray(unirArray(arr1,arr2),arr3));
