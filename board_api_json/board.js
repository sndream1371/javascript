$(document).ready(function () {
 
    console.log("document ready.....");

    var i = 1;
    var $listDiv = $(".list");
    var $fm = $(".fm");

    console.log("typeof listDiv :"+ typeof $listDiv);

    var url = "https://api.alternative.me/v2/listings/";
    getTodo(todoList, url);

    function todoList(result) {
        //var resultPares = JSON.parse(result);
        //console.log(" result.data :"+ JSON.stringify(resultPares.data));
        var str = "";
        
        var result = result.data; //json Ojbect에서 "data" array부분만 파싱
        for (var i = 0; i < result.length; i++) {

            str += "<li>" + result[i].id + "　　" + result[i].name + "　　" + result[i].symbol + "</li>"

        }

        $listDiv.html(str);
    }
})


var getTodo = function (callback, url) {
 
    console.log("Start todo...............");
 
    $.ajax({ //ajax 실행
 
        url: url,
        dataType: "json",
        success: function (result) { //result = data.json 메뉴 데이터
            //let resultString = JSON.stringify(result);
            //console.log("result = " + resultString);
            //todo1 = result; // null을 data.json 메뉴데이터로 바꿔준다
            console.log("callback :"+callback);
            if (callback) {
                callback(result);
            }
        }
    });
};


