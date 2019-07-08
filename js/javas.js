$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $('#menu').toggleClass('menu_active');
});
var nav=document.getElementsByClassName('.nav');
//window.onscroll=function(){
//    var coordY=
//    if(pageYOffset>=100){
//        nav.addClass('navscroll');
//    }else if(pageYOffset<100){
//        nav.removeClass('navscroll');
//    }
//}
//var navSourceBottom = nav.getBoundingClientRect().bottom + window.pageYOffset;
//
//window.onscroll = function() {
//      if (nav.classList.contains('navscroll') && window.pageYOffset < navSourceBottom) {
//        nav.classList.remove('navscroll');
//      } else if (window.pageYOffset > navSourceBottom) {
//        nav.classList.add('navscroll');
//      }
//    };





















