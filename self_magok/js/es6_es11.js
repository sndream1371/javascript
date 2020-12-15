'use strict'; //엄격모드

/*
00:00 소개
00:53 Shorthand property names
01:53 Destructuring assignment
03:58 Spread syntax
08:06 Default parameters
08:55 Ternary Operator
09:44 Template Literals
10:22 Optional chaining (ES11)
12:18 Nullish Coalescing Operator (ES11)
*/

//Spread syntax
console.log('Spread syntax-------------------------' )
let arrAnimals = ['dog','cat','horse','rabbit'];
let arrayCopy = [...arrAnimals];
console.log(arrAnimals);
console.log(arrayCopy);

arrayCopy = [...arrayCopy,'COW','PIG',{name:'key'}]
console.log(arrayCopy);
console.log( arrayCopy.forEach( element => console.log(element)) ); 


//Default parameters
//함수에 값이 없거나 undefined가 전달될 경우 이름붙은 매개변수를 기본값으로 초기화
console.log('Default parameters--------------------' )
function add(a, b){
  console.log(`a: ${typeof a}  b: ${typeof b}`);
  if(typeof a === 'undefined' || typeof b === 'undefined'){
    console.log('매개변수 값 확인해주세요...')
  }

  if(a === '' || b === ''){
    console.log('매개변수값이 없습니다.')
  }

  return a+b;
}
console.log( add(10,20) ) //3
console.log( add(10,'') ) //?

function addDefault(a=1, b=1){ //Default parameters (매개변수 입력값이 underfined이면 설정된값으로 처리한다.)
  return a+b;
}
console.log( addDefault() ) //2 

