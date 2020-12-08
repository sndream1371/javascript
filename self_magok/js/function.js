'use strict' //엄격모드

function sum( num1, num2 ){
  return num1 + num2;
}

function divide( num1, num2 ){
  return num1 / num2;
}


function display(dis){
  console.log( dis )
}

function display2(dis){ //함수 자체를 인자값으로 받는다
  console.log( dis )
  let result = dis(2,3); 
  console.log(result);
}

display( sum(1,2) ); //3, 함수를 호출

display2( sum ); //?, 함수명을 인자값으로 전달
display2( divide );

/////////////////////////////////////////////////////////////////////////////
//function은 object이다,

function multiply(n1, n2){
  return n1 * n2;
}

const multiplyCopy = multiply;
console.log(multiplyCopy);

console.log( multiplyCopy(10,20) );

function totalSum(n1, multiplyCopy){
  const result = n1 + multiplyCopy(30,40)
  console.log( result );
  //return; <-- function에서 return선언않거나 리턴값을 선언 안하면 undifinded 
  //return `아무거나 리턴 ${result}`; // <- 가능
}

console.log( totalSum(9, multiply) ); //function에서 return이 없으면 undifinded 
console.log('위아래 결과가 동일한가?.. 왜 동일한지?: function은 Oject이므로 Object복사는 주소를 참조한다.')
console.log( totalSum(9, multiplyCopy) );


