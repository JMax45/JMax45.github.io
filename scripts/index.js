function detectMob() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
}
  
function openNav(){
    document.getElementById("mobile-sidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mobile-sidenav").style.width = "0";
}
  
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);
  
var xDown = null;                                                        
var yDown = null;
  
function getTouches(evt) {
    return evt.touches ||             // browser API
           evt.originalEvent.touches; // jQuery
}                                                     
  
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
  
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }
  
    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;
  
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
  
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            openNav();
        } else {
            closeNav();
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }

    xDown = null;
    yDown = null;                                             
};


// get the sticky element
const stickyElm = document.getElementsByTagName('header')[0]
console.log(stickyElm)

const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
  {threshold: [1]}
);

observer.observe(stickyElm)