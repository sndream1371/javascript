

var i = 0;
for (i=0; i<=10; i++) {
    document.write("Hello World!");
    document.write("<br>");
    console.log("hellow world");
}

var click = true;
function overClick() {
     if (click) {
        console.log("클릭됨");
        click = !click;
        
        // 타이밍 추가
        setTimeout(function () {
            click = true;
        }, 2000)
        
     } else {
        console.log("중복됨");
     }
}
