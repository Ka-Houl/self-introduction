
$(document).ready(function(){
   	$('.section-main').css({width:'450px',transition:'all 2s'})
})
// console.log($)
window.onload = function (){
	
  var drow = document.getElementsByClassName('drow')[0],
      sTop = getScrollOffset().top;
      t = null;

  addEvent(drow,'click',function(){
	t = setInterval(function(){
	  window.scrollBy(0,6);
	  if((getScrollOffset().top >= 1300)){
	  	clearTimeout(t);  
	  }
	},5)
  })

  addEvent(window,'scroll',function(){
    var sTop = getScrollOffset().top;
    // console.log(sTop,window.innerHeight,(window.getScrollSize().height))
      if((sTop + window.innerHeight + 12 ) > window.getScrollSize().height){
        clearTimeout(t);  
      }
  })

}