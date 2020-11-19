//ES6 이전.
setTimeout(function() {
    console.log("1");
}, 1000);

setTimeout( () => {
    console.log("2");
}, 2000);

setTimeout( () =>  console.log("3") , 3000);

setTimeout( () => ( alert(".....test...") ) , 4000);


const person = {
    name: 'Lee',
    sayHi() {
      console.log(`Hi ${this.name}`);
    }
  };
  
  person.sayHi(); // Hi Lee


//스택 테스트----------------------------------
var jData = '{"name":"jin","age":"10","sex":"femail"}';

var stack = [];
stack.push('aaa');       // stack is now [2]
stack.push('bbb');       // stack is now [2, 5]
stack.push(1111);
stack.push(2222);
stack.push('cccc');
stack.push(jData);
console.log("stack push>"+stack)
// var i = stack.pop(); // stack is now [2]
// alert(i);            // displays 5
// alert("second pop :"+stack.pop() );

console.log("stack.length :"+stack.length);
let totLen = stack.length;
for(let j=0; j < totLen; j++){
    //console.log("out..."+stack.pop() );
    let pop = stack.pop();
    console.log("typeof >>>"+typeof pop);
    if( typeof pop == 'object'){
        //console.log("object..."+JSON.stringify(pop))
        let obj = JSON.parse(JSON.stringify(pop))
        //let obj = JSON.parse('{"name":"jin","age":"10","sex":"femail"}')
        console.log("name >>"+obj.name)
        console.log("age >>"+obj.age)
        console.log("sex >>"+obj.sex)
    }else{
        console.log("not object.."+pop)
    }
}

//console.log("this :"+this)






