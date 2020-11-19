  //============================================================
  // StartClock()
  //============================================================
  // 현재 시간 출력

  function PrintTime() {
    var today = new Date();
    var hh = today.getHours();
    var mi = today.getMinutes();
    var ss = today.getSeconds();
    //document.getElementById("result").innerHTML = hh + ":" + mi + ":" + ss;
    console.log("time:"+ hh + ":" + mi + ":" + ss);
  }

  // 중지를 위해 ID 보관
  var timerId = null;

  // 시계 시작
  function StartClock() {
    //PrintTime();
    timerId = setInterval(PrintTime, 2000);
    
  }

  // 시계 중지
  function StopClock() {
    if(timerId != null) {
        clearInterval(timerId);
    }
  }

  



