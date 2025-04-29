const sideClosedButton = document.querySelector('#burger-menu');
const sideMenu = document.querySelector('.menu-list');

sideClosedButton.addEventListener('click', sideMenuOpen);
sideMenu.addEventListener('click', sideMenuOpen);


function sideMenuOpen(){
  sideMenu.classList.toggle('hidden');
};