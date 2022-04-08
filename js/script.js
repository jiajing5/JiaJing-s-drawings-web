// 參考crowdfunding
// https://ithelp.ithome.com.tw/articles/10194968

// import axios from 'axios';
let hamburgerIcon = document.querySelector(".hamburger-icon");
let closeicon = document.querySelector(".close-icon");
let mainNav = document.querySelector(".main-nav");
// let nav_list_height = document.querySelector(".main-nav ul").offsetHeight;
// let home = document.querySelector("home");
// let portfolio= document.querySelector("#portfolio");
// let service = document.querySelector("service");

function open_menu() {
  hamburgerIcon.classList.add('hidden');
  closeicon.classList.add('shown');
  // console.log(nav_list_height);
  mainNav.style.height = "240px";
}
function close_menu() {
  mainNav.style.height = "0px";
  hamburgerIcon.classList.remove('hidden');
  closeicon.classList.remove('shown');
}
window.addEventListener("resize",function(){
  if(document.body.offsetWidth < 1024){
  mainNav.style.height = "0px";
  hamburgerIcon.classList.remove('hidden');
  closeicon.classList.remove('shown');
}else{
  mainNav.style.height = "50px";
  closeicon.classList.remove('shown');
}});


let aside = document.querySelector('aside');
window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
  /*當瀏覽器捲軸往下捲100px*/
  const px = 100;
  if (scrollTop > px) {
    aside.classList.remove('hidden');
  } else {
    aside.classList.add('hidden');
  }
});
let iconCircleUp = document.querySelector('.icon-arrow-up-alt1');
iconCircleUp.addEventListener('click', function(){
  requestAnimationFrame(function fn(){
    let scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;  
    if(scrollTop > 0){
      scrollBy(0,-40);
      requestAnimationFrame(fn);
    }    
  });
});
let iconCircleDown = document.querySelector('.icon-arrow-down-alt1');
iconCircleDown.addEventListener('click', function(){
  requestAnimationFrame(function fn(){
    let scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;  
    if(document.body.scrollHeight > scrollTop + document.body.clientHeight){
      scrollBy(0, 40);
      requestAnimationFrame(fn);
    }
  });
});


// function show_home(){
//   portfolio.style.display="none";
//   home.classList.remove("hidden");
//   service.style.display="none";
//   close_menu();
// }
// function show_portfolio(){
//   portfolio.style.display="block";
//   home.classList.add("hidden");
//   service.style.display="none";
//   close_menu();
// }
// function show_service(){
//   service.style.display="block";
//   home.classList.add("hidden");
//   portfolio.style.display="none";
//   close_menu();
// }

// function clear_pic(){
//   igPic.innerHTML='';
//   igPicDaily.innerHTML='';
// }



// https://www.wfublog.com/2020/07/instagram-basic-display-api-long-term-token-get-images.html

// userid 
// 5017454174964185
// mediaids
// 17899325573522588