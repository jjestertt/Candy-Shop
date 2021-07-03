const menu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu-link');
const description = document.querySelector('.description');
const logoBlock = document.querySelector('.block-logo');
const titleBlock = document.querySelector('.block-title');
const contentWrapper = document.querySelector('.content-wrapper');
const load = document.querySelector('.load');


const animationContainer = document.querySelector('.animation-container');

const setLoad = setTimeout(() => {
   load.classList.remove('active');
   clearTimeout(setLoad);
}, 2000);


const handleMenuItemClick = (e) => {
   e.preventDefault();
   logoBlock.classList.remove('active');
   animationContainer.classList.remove('active');
   description.innerHTML = e.currentTarget.getAttribute('value');
   titleBlock.classList.remove('active');
   menu.classList.remove('active');
   contentWrapper.classList.add('active');

}

const handleMenuClick = (e) => {
   e.preventDefault();
   logoBlock.classList.add('active');
   animationContainer.classList.add('active');
   description.innerHTML = e.currentTarget.getAttribute('value');
   titleBlock.classList.add('active');
   menu.classList.add('active');
   contentWrapper.classList.remove('active');
}

menuLinks.forEach(item => {
   item.addEventListener('click', e => { handleMenuItemClick(e) })
});

menu.addEventListener('click', handleMenuClick)
