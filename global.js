// Sticky header--------------------------------

var nav =  document.getElementById("sticky_nav");
var header = document.getElementById("sticky_header");

window.onscroll = shrink_header;

function shrink_header(){
  if (window.matchMedia('(max-width: 554px)').matches){
    if (window.pageYOffset>115) {
      header.style.top = "0px";
      nav.style.top = "-55px";
    }
    if (window.pageYOffset<115) {
      header.style.top = "-150px";
      nav.style.top = "-150px";
    }
  }
  
  if (window.matchMedia('(min-width: 554px)').matches){
    if (window.pageYOffset>115) {
      header.style.top = "0px";
      nav.style.top = "-29px";
    }
    if (window.pageYOffset<115) {
      header.style.top = "-150px";
      nav.style.top = "-150px";
    }
  }
}

// Sliding images----------------------------
(function(){
 
  var counter = 0,
  $items = document.querySelectorAll('.jumbotron .slide'),
  numItems = $items.length;
 
  var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);
 
    [].forEach.call( $items, function(el){
      el.classList.remove('show');
    });
 
    $items[itemToShow].classList.add('show');
  };
 
  document.querySelector('.next').addEventListener('click', function() {
    counter++;
    showCurrent();
  }, false);
 
  document.querySelector('.prev').addEventListener('click', function() {
    counter--;
    showCurrent();
  }, false);
 
})();


