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
    case 'song_6_sonbu_park' : queryParm ='36.033652,127.154397'; break;
    case 'song_9_sonbu_seo' : queryParm ='36.029207,127.180327'; break;
    case 'song_6_son_mongchun' : queryParm ='36.028864,127.179256'; break;
    case 'song_juminju' : queryParm ='36.029762,127.179788'; break;
    case 'song_eunsanjung_sinpungan' : queryParm ='36.029807,127.179928'; break;
    case 'song_9_son_sangbuk' : queryParm ='36.049299,127.187954'; break;
    case 'song_8_son_younghak' : queryParm ='36.049378,127.187958'; break;
    case 'song_8_sonbu_lee' : queryParm ='36.057006,127.193079'; break;
    case 'song_9_son_sangwon' : queryParm ='36.055308,127.185688'; break;
    case 'song_7_son_oukwon' : queryParm ='36.054447,127.221850'; break;
  }

  window.location.href = GOURL + queryParm;
}

