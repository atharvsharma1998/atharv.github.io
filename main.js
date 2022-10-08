// let header = document.querySelector('header');

// window.addEventListener('scroll', () => {
//     header.classList.toggle('shadow', window.scrollY>0);
// });
const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');
const mobile_menu_link = mobile_menu.querySelector('a');

hamburger.addEventListener('click', () =>{
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu' ? 'close' : 'menu';

    mobile_menu.classList.toggle('is-open');
})

mobile_menu.addEventListener('click', () =>{
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu' ? 'close' : 'menu';

    mobile_menu.classList.toggle('is-open');
})