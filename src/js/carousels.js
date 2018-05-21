//import swiper from '../sass/idangerous.swiper.scss';

import Swiper from '../../node_modules/swiper/dist/js/swiper.js';
import swiper from '../sass/idangerous.swiper2.scss';
//import swiper from '../sass/idangerous.swiper.scss';
//import swiper from '../../node_modules/swiper/dist/css/swiper.min.css';



const posts = function() {

    const el = document.getElementById('posts');

    if (el) {   
    
        const carousel = el.getElementsByClassName('js-posts')[0],
              nav_prev = el.getElementsByClassName('js-post--prev')[0],
              nav_next = el.getElementsByClassName('js-post--next')[0];
        
        const postsSwiper = new Swiper (carousel, {
            navigation: {
                nextEl: '.js-post--next',
                prevEl: '.js-post--prev',
            },
            slidesPerView: 'auto',
            speed: 600,
            slidesOffsetAfter: 100
        }); 
        
        setTimeout(function() {
            postsSwiper.update();
        }, 1000);
        
        Pace.on('done', function() {    
            postsSwiper.update();
        });
    }
};


const practices = function() {

    const el = document.getElementById('practices');

    if (el) {   
    
        const carousel = el.getElementsByClassName('js-practices')[0],             
              nav_prev = el.getElementsByClassName('js-practice--up')[0],
              nav_next = el.getElementsByClassName('js-practice--down')[0];
              
        const ael = document.getElementsByClassName('anim');

        const isInView = function(el) {
        	let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
        	
        	if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow) {
        		return true;
        	}
        };
        
        const mySwiper = new Swiper (carousel, {
            direction: 'vertical',
            navigation: {
                nextEl: '.js-practice--down',
                prevEl: '.js-practice--up',
            },
            on: {
                init: function() {
                    nav_prev.classList.add('is-inactive');
                },
                reachBeginning: function() {
                    nav_prev.classList.add('is-inactive');
                },
                reachEnd: function () {
                    nav_next.classList.add('is-inactive');
                },
                slideNextTransitionStart: function() {
                    nav_prev.classList.remove('is-inactive');
                },
                slidePrevTransitionStart: function() {
                    nav_next.classList.remove('is-inactive');
                },
                slideChange: function() {
                    
                    
                    for (let i = 0; i < ael.length; i++) {
                    	    
                    	if (isInView(ael[i])) {
                    	    console.log('f');
                    		ael[i].className += ' anim--loaded';
                    	}
                    }
                }

            },
            slidesPerView: 'auto',
            speed: 600,
            slidesOffsetAfter: 100
        }); 
        
        Pace.on('done', function() {

    

            mySwiper.update();
        });


        
    }
};



const opinions = function() {

    const el = document.getElementById('opinions');

    if (el) {   
    
        const carousel = el.getElementsByClassName('js-opinions')[0];
        
        const mySwiper = new Swiper (carousel, {
            slidesPerView: 'auto',
            speed: 600,
        }); 
        
        Pace.on('done', function() {    
            mySwiper.update();
        });
    }
};







opinions();
    posts();
    practices();

/*

on: {
            init: function() {
                leadline.classList.add('full');
            },
            transitionStart: function() {
                leadline.classList.remove('full');
                
                setTimeout(function() {
                    leadline.classList.add('full');
                }, 100);
                
            }
        }
*/