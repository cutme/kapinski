import css from './sass/style.scss';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import Pace from 'pace-js';

/* 
 * Pace preloader
 */

Pace.start();
Pace.on('done', function() {    

    document.getElementById('cover').remove();
    
    setTimeout(function() {
        document.body.removeAttribute('style');
    }, 4000);


    console.log('pace loaded');
    
    // Start top anim

    let element = document.getElementsByClassName('o-container')[0];
    
    
    setTimeout(function() {
        
        if (document.getElementsByClassName('c-logo__sign')[0]) {
            document.getElementsByClassName('c-logo__sign')[0].classList.add('show');
        }
        
        
        let el = document.getElementsByClassName('js-kapinskisign')[0];
        
        el.setAttribute('src', 'img/mk-logo-color.gif?v='+Math.floor(Math.random() * 1001));
        
        
    }, 3000);
    
    
       
   // element.addEventListener("transitionend", function(event) {
   //     if (window.getComputedStyle(element).getPropertyValue('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
          //  alert('s');
            
            
            
            
                /*
if (document.getElementsByClassName('c-logo__sign')[0]) {
                    document.getElementsByClassName('c-logo__sign')[0].classList.add('show');
                }
*/

                
            
               /*
 if (document.getElementsByClassName('c-top__header')[0].getElementsByClassName('o-btn')[0]) {
                    document.getElementsByClassName('c-top__header')[0].getElementsByClassName('o-btn')[0].classList.add('show');
                }
                
                if (document.getElementsByClassName('c-top__more')[0]) {
                    document.getElementsByClassName('c-top__more')[0].getElementsByClassName('o-btn')[0].classList.add('show');
                }
            
                if (document.getElementsByClassName('c-top__header')[0]) {
                    document.getElementsByClassName('c-top__header')[0].classList.add('show');
                }
                
                if (document.getElementsByClassName('c-top__intro')[0]) {
                    document.getElementsByClassName('c-top__intro')[0].classList.add('show');
                }
                
  if (document.getElementsByClassName('c-logo__sign')[0]) {
                    document.getElementsByClassName('c-logo__sign')[0].classList.add('show');
                }
*/
            //}            
            
   // }, false);



    

});


    ;


/* 
 * Google Fonts
 */

const WebFont = require('webfontloader');

WebFont.load({
    google: {
        families: ['Open+Sans:400,600:latin-ext', 'Lato:300,400,700:latin-ext']
    }
});


require('./js/carousels.js');
require('./js/framework.js');



