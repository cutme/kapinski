import Swiper from '../../node_modules/swiper/dist/js/swiper.js';
import swiper from '../sass/idangerous.swiper2.scss';

const isInView = function(el) {
	let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
	
	if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow) {
		return true;
	}
};


const posts = function() {

    const el = document.getElementById('posts');

    if (el) {   
    
        const check = function() {

            if( isInView(el) ) {
            
                const carousel = el.getElementsByClassName('js-posts')[0],
                      nav_prev = el.getElementsByClassName('js-post--prev')[0],
                      nav_next = el.getElementsByClassName('js-post--next')[0];
                
                const postsSwiper = new Swiper (carousel, {
                    loop: true,
                    navigation: {
                        nextEl: '.js-post--next',
                        prevEl: '.js-post--prev',
                    },
                    slidesPerView: 'auto',
                    speed: 600,
                    slidesOffsetAfter: 100
                }); 
                
                window.removeEventListener('scroll', check);
                
               /*
 setTimeout(function() {
                    postsSwiper.update();
                }, 1000);
*/
                
                /*
Pace.on('done', function() {    
                    postsSwiper.update();
                });
*/
            }
        }
        
        window.addEventListener('scroll', check);
    }
};


const practices = function() {

    const el = document.getElementById('practices');

    if (el) {   
    
        const carousel = el.getElementsByClassName('js-practices')[0],             
              nav_prev = el.getElementsByClassName('js-practice--up')[0],
              nav_next = el.getElementsByClassName('js-practice--down')[0];
              
        const ael = el.getElementsByClassName('anim');
        
        const mySwiper = new Swiper (carousel, {
            autoplay: {
                delay: 5000,
            },
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
                    		ael[i].className += ' anim--loaded';
                    	}
                    }
                }

            },
            loop: true,
            slidesPerView: 'auto',
            slidesPerGroup: 3,
            speed: 1200,
            slidesOffsetAfter: 100
        }); 
        
        Pace.on('done', function() {    
            mySwiper.update();
        });
    }
};


(function() {

    const el = document.getElementById('opinions');

    if (el) { 

        const carousel = el.getElementsByClassName('js-opinions')[0];
        
        const check = function() {

            if( isInView(el) ) {
    
                const mySwiper = new Swiper (carousel, {
                    loop: true,
                    loopedSlides: 4,
                    autoplay: {
                        delay: 5000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    },
                    slidesPerView: 'auto',
                    speed: 600,
                }); 
/*
                
                Pace.on('done', function() {    
                    mySwiper.update();
                });
                
*/
                window.removeEventListener('scroll', check);
            }
            
        }

        window.addEventListener('scroll', check);
    }

}).call(this);




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