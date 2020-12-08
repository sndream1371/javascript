function asyncClick(){ //클릭시 처리

    console.log("비동기 처리 예....");

    try {
        var fruits = ["사과", "배", "오렌지"];
    
        console.log("fruits len:"+fruits.length);
    } catch (error) {
        console.log("오류 발생함..."+error);
           
    }


    //동기화 처리 function
    function func1() {
        console.log('sync func1..');
        func2();
    }
    
    function func2() {
        console.log('sync func2..');
        func3();
    }
    
    function func3() {
        console.log('sync func3..');
    }
    
    func1();


    //비동기화 처리 function
    function nonAsyfunc1() {
        console.log('nonAsy func1');
        nonAsyfunc2();
    }
    
    function nonAsyfunc2() {
        setTimeout(function() {
        console.log('nonAsy func2');
        }, 0);
    
        nonAsyfunc3();
    }
    
    function nonAsyfunc3() {
        console.log('nonAsy func3');
    }
    
    nonAsyfunc1();


    


}