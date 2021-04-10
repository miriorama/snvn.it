gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

gsap.set('.flower', {
    transformOrigin:"50% 50%",
    scaleX:0,
    scaleY:0,
});
gsap.to('.flower', {
    scrollTrigger: {
        start: '-50% center',
        end: 'bottom center',
        trigger: 'section.secondary',
        scrub: 1
    },
    rotation: 360,
    transformOrigin:"50% 50%",
    scaleX:1,
    scaleY:1,
    duration: 3
});

let offset =  document.body.clientHeight / 100 * 5;
/*
gsap.set('.intro > *', {
    translateY:offset,
});
gsap.to('.intro > *', {
    scrollTrigger: {
        trigger: '.intro',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
    },
    translateY: '-=' + offset,
    duration: 3
});*/

var UTIL = (function(){
    let util = {};

    util.scrollTo = function(selector) {
        gsap.to(window, {duration: 1.5, scrollTo: selector, ease: Power4.easeInOut});
    }

    return util;
})();        

// var APP = (function(){
//     let app = {};

//     app.init = function(selector) {
//         let $thumbs = document.querySelectorAll('.thumbs .thumb');

//         for (const $thumb of $thumbs) {
//             $thumb.addEventListener('click', function() {
//                 loca
//             }
//         }
//     }

//     return app;
// })();        

/*$(window).scroll(function() {
var theta = $(window).scrollTop() / 10 % Math.PI;
    $('.flower').css({ transform: 'rotate(' + theta + 'rad)' });
    $('.flower').css({ transform: 'rotate(-' + theta + 'rad)' });
});*/