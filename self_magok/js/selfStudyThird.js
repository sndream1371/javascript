function selfStudyThird(){
  'use strict'; //엄격모드

  //=============================================
  // 셀프 스터디 3번째
  //=============================================
  console.clear();

  let str = "+7(903)-123-45-67";
  let regexp = /\d/g;

  console.log( str.match(regexp) ); // 일치하는 문자의 배열: 7,9,0,3,1,2,3,4,5,6,7

  // 이 배열로 숫자만 있는 전화번호를 만듭시다.
  console.log( str.match(regexp).join('') ); // 79035419441


  //-------------------------------------------------
  // this 정리, 호출하는 방법에따라 결정된다.(핵심)

  var student = {
    name : 'jinyoung',
    age : '30',
    whoAmI : function(){
      console.log('this ===>'+this);
      console.log(this);
    }
  };

  student.whoAmI(); //object

  var myWhoAmI = student.whoAmI();
  myWhoAmI; //object

  var myWhoAmI = student.whoAmI;
  myWhoAmI(); //window object

  var myStudent = myWhoAmI.bind(student);
  console.log(myStudent);

  //================================================================
  //function 곱하기,더하기,나누기,빼기

  function calculater(command, in1, in2){

    switch(command){
      case 'add' : return in1 + in2; break;
      case 'divide' : return in1 / in2; break;
      case 'multifly' : return in1 * in2; break;
      case 'minus' : return in1 - in2; break;
      default :  throw Error(' (사용자오류) command 값이 잘못되었습니다.');
    }
  }

  console.log( "result =>"+ calculater('add',10,20) );
  console.log( "result =>"+ calculater('divide',10,20) );
  console.log( "result =>"+ calculater('multifly',10,20) );
  console.log( "result =>"+ calculater('minus',10,20) );
  //console.log( "result =>"+ calculater('xxxx',10,20) );


//=================================================================
//Object  = { key : value } 의 집합체

//생성자 함수를 작성하여 객체 타입을 정의한다. 객체 타입 이름의 첫 글자는 반드시 대문자를 사용하는 좋은 관례가 있으므로 따르기를 권장한다.
//new를 이용하여 객체의 인스턴스를 생성한다.
function Person(name,age,height){
  this.name = name;
  this.age = age;
  this.height = height;
};

console.log( new Person("JIN",20,150) );

var car = {'make':'hyundal','model':'suv','year':2020};
console.log(car);
car.make = 'samsung';
console.log(car);
car.owner = 'jinyoung'; //owner 추가
console.log(car);

console.log( JSON.stringify(car)); //key,value가 string 형태로 모두 변환됨



//생성자 함수처럼 구현하지 않을경우 return을 사용하여 객체생성
function School(name, createdata, totNum){

  return{
    name,
    createdata,
    totNum
  }
}
console.log( School("하나학교",'2020.01.01',1000));

//---------------------------------------------------------------------------
// for..in  VS  for..of
// for (key in obj)
const jinNum = { a:11,b:22,c:33,d:44,e:55,f:66};
for( let key in jinNum){
  //console.log( "Ojbect의 key:"+key + " Object의 Value:" + jinNum[key] ); //Object의 value의값은 [] 으로 가져온다.
  console.log( key +" "+ jinNum[key] );
}


// for (value of iterable)
const jinArray = [50,40,30,20,10];
for( let value of jinArray){
  console.log( value);
}

}

