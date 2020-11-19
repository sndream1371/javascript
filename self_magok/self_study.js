function selfStudyClick(){


    function square(number) {

        console.log("arguments :"+arguments);
        console.log("this :"+this);
      
        return number * number;
    }
      
      square(2);

    //================================================
      var valueTest = 1;

      var obj = {
        value: 9999,
        foo: function() {
            console.log("foo's this: ",  this);  // obj
            console.log("foo's this.value: ",  this.value); // 100

            function bar() {
                console.log("bar's this: ",  this); // window
                console.log("bar's this.value:::>>", this.valueTest); // 1
            }
            bar();
        }
      };
      
      obj.foo();


      //-------------------------------------------------------

      function changeVal(primitive, obj) {
        primitive += 100;
        console.log("primitive >>"+primitive)
        obj.name = 'Kim';
        obj.gender = 'female';
        obj.num = primitive;
      }
      
      var num = 10000;
      var obj = {
        name: 'Lee',
        gender: 'male'
      };
      
      console.log(num); // 100
      console.log(obj); // Object {name: 'Lee', gender: 'male'}
      
      changeVal(num, obj);
      
      console.log(num); // 100
      console.log(obj); // Object {name: 'Kim', gender: 'female'}`

      console.log(typeof obj);


      //=========================================================
/*      
     const template = `<ul class="nav-items">
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
                </ul>`;

    console.log(template);
    document.write(template)
*/
    //------------------------------------------------------------------
    //비동기처리 -응답값을 기다리지 않는다.
/*    
    function getData() {
        var tableData;
        $.get('http://localhost:8080/rest/hldy_yn?inputDt=', function(response) {
            console.log("response :>"+ JSON.stringify(response));
            tableData = response;
        });
        return tableData;
    }
    console.log("getData ::"+getData() ); // undefined
*/

    function getData(callbackFunc) {
        $.get('http://localhost:8080/rest/hldy_yn?inputDt=', function(response) {
            callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
        });
    }

    getData((tableData) => {
            console.log("콜백을 이용한 동기화 데이터 수신:"+tableData); // $.get()의 response 값이 tableData에 전달됨
            console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
        });

//======================================

    var res = square(5); // TypeError: square is not a function

    var square = function(number) {
        return number * number;
    }

    console.log("square:::"+res);

//==================================================
function calculateArea(width, height) {
    var area = width * height;
    return area; // 단일 값의 반환
  }
  console.log(calculateArea(3, 5)); // 15
  console.log(calculateArea(8, 5)); // 40
  
  function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    return [area, volume]; // 복수 값의 반환
  }
  
  console.log('area is ' + getSize(8, 9,100)[0]);   // area is 6
  console.log('volume is ' + getSize(3, 2, 3)[1]); // volume is 18
  console.log('third return array value :' + getSize(6,7,8)[2]); // undefined


    //-------------------------------------------------------

    // 기명 함수 표현식(named function expression)
    var namedFunc = function multiply(a, b) {
    return a * b;
    };
    // 익명 함수 표현식(anonymous function expression)
    var anonymousFunc = function(a, b) {
    return a * b;
    };

    console.log(namedFunc.name);     // multiply
    console.log(anonymousFunc.name); // ''

    //=================================================
    //익명 즉시 실행 함수(immediately-invoked function expression)
    (function () {
        var foo = 1;
        console.log(foo); //1
     }());
      
      var foo = 100;
      console.log(foo); //100

    //=====================================================
    //함수 내부에 정의된 함수를 내부함수(Inner function)라 한다.
    //아래 예제의 내부함수 child는 자신을 포함하고 있는 부모함수 parent의 변수에 접근할 수 있다.
    // 하지만 부모함수는 자식함수(내부함수)의 변수에 접근할 수 없다.
    function parent(param) {
        var parentVar = param;
        function child() {
          var childVar = 'lee';
          console.log(parentVar + ' ' + childVar); // Hello lee
        }
        child();
        //console.log(parentVar + ' ' + childVar); // Uncaught ReferenceError: childVar is not defined
      }

      parent('Hello');

    //---------------------------------------------------------
    console.log("내부함수 호출...");
    var x = 'global';

    function foot() {
      var x = 'local';
      console.log(x);  //local

      function bar() {  // 내부함수
        console.log(x); // local
      }

      bar();
    }

    foot();
    console.log(x); // global

    //===========================================================
    //렉시컬 스코프는 함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 결정된다.
    //자바스크립트는 렉시컬 스코프를 따르므로 함수를 선언한 시점에 상위 스코프가 결정된다. 
    //함수를 어디에서 호출하였는지는 스코프 결정에 아무런 의미를 주지 않는다
    var x = 1;

    function foo11() {
      var x = 10;
      bar11();
    }

    function bar11() {
      console.log(x);
    }

    foo11(); // 1
    bar11(); // 1

    //=================================================================================
    /*
    9. 최소한의 전역변수 사용
      전역변수 사용을 최소화하는 방법 중 하나는 
      애플리케이션에서 전역변수 사용을 위해 다음과 같이 
      전역변수 객체 하나를 만들어 사용하는 것이다. (더글라스 크락포드의 제안)
    */

   var MYAPP = {};

   MYAPP.student = {
     name: 'jin young',
     gender: 'male'
   };

   MYAPP.student2 = {
    name: 'do hyun',
    gender: 'female'
  };

   console.log(MYAPP.student.name);
   console.log(MYAPP.student.gender);
   
   console.log(MYAPP.student2.name);
   console.log(MYAPP.student2.gender);

   /*
    즉시실행함수를 이용한 전역변수 사용 억제
    전역변수 사용을 억제하기 위해, 
    즉시 실행 함수(IIFE, Immediately-Invoked Function Expression)를 사용할 수 있다. 
    이 방법을 사용하면 전역변수를 만들지 않으므로 
    라이브러리 등에 자주 사용된다. 
    
    즉시 실행 함수는 즉시 실행되고 그 후 전역에서 바로 사라진다.
   */

  (function () {
    var MYAPPEXE = {};
  
    MYAPPEXE.student = {
      name: 'Lee',
      gender: 'male'
    };
  
    console.log("즉시실행함수 실행 내부......");
    console.log(MYAPPEXE.student.name);
  }());
  
  console.log("즉시실행함수 실행 밖");
  //console.log(MYAPPEXE.student.name); //MYAPPEXE is not defined

  //==========================================================
  //진영 : 익명 함수표현식으로 1~10 더하기
  //==========================================================
  var sum = function (num,secnum){ //무기명 함수표현식
    let tot =0;
    for(let i=num; i <= 10 ; i++){
      tot += i;
      console.log("sum out>>"+tot+ " i :"+i);
    }
    
    return tot + secnum;
    
  }

  console.log("함수표현식 호출 : "+sum(5,1000000));


  //====================================================
  //콜백 함수
  //====================================================
  var doSomethingVal = function doSomething() {
    var name = 'Lee';
  
    setTimeout(function () {
      console.log('My name is ' + name);
    }, 2000);

    return 1+1;
  }
  
  //doSomething(); // My name is Lee
  console.log("doSomethingVal() >"+doSomethingVal()); //표현식 형태로 사용권장함
  //console.log("doSomething() >"+doSomething());  //기명 함수식 호출 안되는게 정상


  //=====================================
  //메서드와 this
  //=====================================
  let person = {
    name : "jin young",
    age : 40,
    sex : "male"
  }

  //array function
  person.sayHi = () =>{
    alert("안녕하세요. 저는 진영입니다.");
  }

  //일반 function
  person.sayHiFnc = function(){
    alert("안녕하세요. 저는 진영입니다. normal function...");
  }

  // person.sayHi();
  // person.sayHiFnc();

  let lobot = {
    name : "진로봇",
    alias : "lobot",
    action_hand_up : () => { alert("팔위로")},  //
    action_hand_left : () => { alert("팔왼쪽")},
    action_hand_right : () => { alert("팔오른쪽")},
    action_hand_down : () => { alert("팔아래로")},
    action_foot_up : function(){ console.log("로봇 다리 위로...") }
  }

  lobot.action_hand_up();
  lobot.action_foot_up();
}




