'use strict' //엄격모드

function sum( num1, num2 ){
  return num1 + num2;
}


//const button = document.querySelector('button'); //첫번째 일된된 selector만 만환
const selectButtons = document.querySelectorAll('button'); //일치된 모든 selector반환
console.log(selectButtons)
selectButtons.forEach(function(userItem) {
  console.log(userItem)  
});

function goUrl(btnParm) {
  console.log(btnParm);

  let GOURL = 'https://www.google.com/maps/search/?api=1&query=';
  let queryParm = null;
  switch(btnParm){
    case 'song_7_sonbu_kim' : queryParm ='36.036767,127.160053'; break;
  
  }

  window.location.href = GOURL + queryParm;

}

