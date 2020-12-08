'use strict'; //엄격모드

console.log('Array Study start.......');

const fruits = ['apple','banana','mango','grape'];
console.log(fruits);

for(let i=0; i < fruits.length; i++){
  console.log(fruits[i]);
}

for(let fruit of fruits){ //반복해서 출력
  console.log(fruit);
}

console.log(fruits.indexOf('apple')); //0

fruits.pop();
console.log( fruits );

console.log( fruits.push('berry') );
console.log( fruits );

fruits.push('apple1','apple2');
console.log( fruits );

//===============================================================

let vegetables = ['양배추', '순무', '무', '당근','수박']
console.log(vegetables)
// ["양배추", "순무", "무", "당근"]

vegetables.pop();
vegetables.pop();
vegetables.push('토마토','가지');
let arr = vegetables.concat('추가1','추가2','추가3');
console.log(vegetables);
console.log(arr);

let pos = 1
let n = 2

vegetables.splice(1, 4,'감자','감자2','옥수수');
let addItems = vegetables;
console.log('vegetables'+vegetables);
console.log('addItems'+addItems);

let removedItems = vegetables.splice(pos, n)
// 배열에서 항목을 제거하는 방법
// pos 인덱스부터 n개의 항목을 제거함

console.log(vegetables)
// ["양배추", "당근"] (원 배열 vegetables의 값이 변함)

console.log(removedItems)
// ["순무", "무"]
