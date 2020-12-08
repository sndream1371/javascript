'use strict' //엄격모드

//primitive 변수
//number, string, boolean, null, undefined
let num = 10;
let num2 = 20;
console.log(` ${num} ${num2}`);

num2 = '변경된수';
console.log(` ${num} ${num2}`); //num2만 변경됨


//Ojbect
//primitive 이외의 모든건 function, array, 등

let object ={
  name : 'jinyoung',
  age : 10,
  sex : 'male',
}
console.log(object);
object.name = 'taeeun';
console.log(object);

let objectCopy = object; //객체복사, 객체복사는 객체 주소값만 복사
console.log(object); 
console.log(objectCopy);   //객체복사한값


//////////////////////////////////////////////////////////////////////////////////////////////////
//Ojbect를 const로 선언할경우
const people ={
  name : 'lg',
  age : 20,
  sex : 'male',
};
console.log(people);

//const 선언에 재선언 불가
// people = {
//   name : 'jinyoung',
//   age : 10,
//   sex : 'male',
// };
// console.log(people); //Uncaught TypeError: Assignment to constant variabl

people.name = 'samsung';
people.age = 100;

console.log(people);
const peopleObjectCopy = people; //object 주소만 복사의미
console.log('const object 복사후 변경된 값이 어떻게 되었을까?');
console.log(peopleObjectCopy);
console.log('const ojbect를 복사하면 object의 주소만 복사되므로 object의 값들은 변경된값으로 저장됨');

