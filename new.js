'use strict'

// let name='bola segun adewale';

// const join=name.slice(0,1) + name.slice(5,6) + name.slice(11,12);
// console.log(join);
//  const join=name.remove
// const createUsername=function(str){
//     let name = str.split("");
//     let username=name.map(function (value){
        
//       return value[0];
    
//     })
//     return username.join("");
//     };
// createUsername('bola segun ade');

// let arr= [1,3,5,7,8,2];
// //  console.log(arr.splice());
//  console.log(arr)
//  console.log(arr.splice(3));

// first data



// ----------------my solution-------------

const dogJuliana = [3,5,2,12,7]
const dogKate   =[4,1,25,8,3];

// // second data
// const dogJuliana2 = [9,16,6, 8, 3]
// const dogKate2 = [10, 5, 6, 1, 4];

// function checkDog(arr){
// arr.forEach((age,i)=> {
//   if(age >=3){
//     console.log(`dog number ${i + 1} is an adult and it is ${age} years old`)
//   }else{
//     console.log(`dog number ${i
//     +1 } is a puppy and it is ${age} years old`)
//   }
// });

// }

// let catRemove = function(arr){
//   let copiedArr = arr.slice();
// copiedArr.pop() 
// copiedArr.shift()
//   return copiedArr 
// }

// function concatArr(arr1,arr2){
// return concatArr = arr1.concat(arr2)

// }




// let trimedJulia = catRemove(dogJuliana2);
// let conbineArr=concatArr(trimedJulia,dogKate2)
// console.log(conbineArr)
// checkDog(conbineArr)

// let juliaNew__arr = [];


// -----------solution---------------

const checkDog =function(dogJulia,dogKate){
  // to make a shallow copy of dogJulia
  const dogJulianaCorrected= dogJulia.slice();
  
  // splice is for delete

  dogJulianaCorrected.splice(0,1); //it can also be :
  dogJulianaCorrected.splice(-2);//  dogJulianaCorrected.slice(1,3);

  // console.log(dogJulianaCorrected)
  const dogs= dogJulianaCorrected.concat(dogKate);

dogs.forEach((age,i)=> {
  if(age >=3){
    console.log(`dog number ${i + 1} is an adult and it is ${age} years old`)
  }else{
    console.log(`dog number ${i
    +1 } is a puppy and it is ${age} years old`)
  }
  
});

}

checkDog(dogJuliana,dogKate)

let filtered = dogKate.map((value)=> value*2)
console.log(filtered);


function dogAge(ages){
 let humanAge = ages.map(age=> age<= 2 ? 2 * age : 16 + age * 2).
 filter(age=>age>=18).
 reduce((acc,age,i,arr)=> acc + age / arr.length,0)

  return humanAge
}

const ave1=dogAge(dogKate);
const ave2=dogAge(dogJuliana)
console.log(ave1,ave2);

let find = ['egg', 'apple','yam','eba','eyin']

