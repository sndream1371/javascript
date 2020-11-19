function selfStudySecondClick(){

  //=============================================
  // 셀프 스터디 2번째
  //=============================================

  /*
  (문1)
  객체야 안녕?
  중요도: 5
  코드 한 줄로 아래 문제를 각각 풀어보세요.

  빈 객체 user를 만듭니다.
  user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
  user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
  name의 값을 Pete로 수정해보세요.
  user에서 프로퍼티 name을 삭제하세요.
  */

  let user = {};
  user.name = "John";
  user.surname = "Smith";
  user.name = "Pete";
  user.age = 20;
  user.booleanMeal = true;
  delete user.name;

  ////////////////////////////////////////////////////////////////
  let fruits = ["사과", "배", "오렌지"];

  console.log("fruits len:"+fruits.length);
  // 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
  let shoppingCart = fruits;
  let shopSecondCart = shoppingCart;
  shoppingCart.push("바나나");

  // fruits에 어떤 값이 들어 있을까요?
  console.log("After fruits len:"+fruits.length);
  console.log("After shoppingCart len:"+shoppingCart.length);
  console.log("After shopSecondCart len:"+shopSecondCart.length);
  
  
  ////////////////////////////////////////////////////////////////
  // 기명/익명 함수

  let sumAge = function(age1, age2, age3) {
    let sumage = age1 + age2 + age3;
    return sumage;
  }

  console.log("sumAge ==>"+sumAge(10,20) );


  /////////////////////////////////////////////////////////////////
  // call back
  function doHomework(subject, callback00) {
    alert(`Starting my ${subject}+${subject} , "${subject+subject}" homework.`);
    alert('222 Starting my ${subject} homework.');
    callback00();
  }
  
  doHomework('math', function() {
    alert('Finished my homework');
  });

  //call back 2
  function first(a,b,callback){
    let v=a*b;
    callback(v);
  }
  
  first(1,2,function( v1){
    console.log( "callback :"+v1 );		//2
  })

  //call back 3.......................
  // 함수 정의
  repeatConsoleLog = function(i, callback) {
  //repeatConsoleLog = (i, callback) =>  //arrow function 사용
    setTimeout(function() {
      console.log(`i값 => ${i}`);
      if (i >= 5) {
        callback();
      } else {
        repeatConsoleLog(i+1, callback);
      }
    }, 10);
  }

   //call back 4----------------------------
  function findUserAndCallBack(id, cb) {
    const user = `{
      "id": ${id},
      "name": "User" + ${id},
      "email": ${id} + '@test.com',
    }`;
    cb(user)
  }
  
  findUserAndCallBack(99988, function (user) {
    console.log("user:", user)
    console.log(" typeof :"+ typeof user);
  })

  

  // 함수 실행
  repeatConsoleLog(0, function() {
    // 함수의 실행이 모두 끝난 뒤에 이곳에 있는 코드가 실행된다.
    console.log('완료');
  });

  ////////////////////////////////////////////////////////////////
  // backtick
  const template = `<ul class="nav-items">
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
  </ul>`;
  console.log(template);

  const template_msg = `템플릿 리터럴은 '작은따옴표(single quotes)'과 "큰따옴표(double quotes)"를 혼용할 수 있다.`;
  console.log(template_msg);



}




