const menu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu-link');
const description = document.querySelector('.description');
const logoBlock = document.querySelector('.block-logo');
const titleBlock = document.querySelector('.block-title');
const contentWrapper = document.querySelector('.content-wrapper');
const load = document.querySelector('.load');
const container = document.querySelector('.container');


const animationContainer = document.querySelector('.animation-container');

const initialize = setTimeout(() => {
   load.classList.remove('active');
   container.classList.add('active');
   clearTimeout(initialize);
}, 1500);


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
   if (!menu.classList.contains('active')) {
      logoBlock.classList.add('active');
      animationContainer.classList.add('active');
      description.innerHTML = e.currentTarget.getAttribute('value');
      titleBlock.classList.add('active');
      menu.classList.add('active');
      contentWrapper.classList.remove('active');
   }
}

menuLinks.forEach(item => {
   item.addEventListener('click', e => { handleMenuItemClick(e) })
});

menu.addEventListener('click', handleMenuClick)
logoBlock.addEventListener('click', handleMenuClick)



particlesJS('particles-js',
   {
      "particles": {
         "number": {
            "value": 80,
            "density": {
               "enable": false,
               "value_area": 800
            }
         },
         "color": {
            "value": "#FDFFFC"
         },
         "shape": {
            "type": "circle",
            "stroke": {
               "width": 0,
               "color": "#000000"
            },
            "polygon": {
               "nb_sides": 1
            },
            "image": {
               "src": "img/github.svg",
               "width": 100,
               "height": 100
            }
         },
         "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
               "enable": false,
               "speed": 1,
               "opacity_min": 0.1,
               "sync": false
            }
         },
         "size": {
            "value": 3,
            "random": true,
            "anim": {
               "enable": true,
               "speed": 1,
               "size_min": 3,
               "sync": false
            }
         },
         "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
         },
         "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "attract": {
               "enable": false,
               "rotateX": 600,
               "rotateY": 1200
            }
         }
      },
      "retina_detect": false,
   }

);
