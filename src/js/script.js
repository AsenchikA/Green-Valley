$(document).ready(function(){

var toggler = document.getElementById("toggler");
toggler.onclick = function(e){
  e.preventDefault();
  // toggler.classList.toggle("toggler--close");
  document.getElementById('main-nav').classList.toggle('main-nav--visible');
}

});
