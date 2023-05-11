// import cards from './modules/cards';
import sliders from './modules/slides';
import hamburger from './modules/hamburger';
import scrolling from './modules/scrolling';

window.addEventListener('DOMContentLoaded', () =>{
    sliders();
    hamburger('.navbar__open', '.navbar__close', '.navbar-collapse', '.navbar-contact');
    scrolling();
})