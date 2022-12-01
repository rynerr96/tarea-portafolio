const menuButton = document.querySelector('.menu-button-img');
const menu = document.querySelector('.menu-navegacion');
const cerrar = document.querySelector('.close');

// if (screen.width > 700) {
//   menu.classList.remove('menu-navegacion');
// }

menuButton.addEventListener('click', (e)=>{
  menu.classList.toggle('spread');
  menuButton.classList.toggle('hide');
  cerrar.classList.toggle('hide');
});

window.addEventListener('click', e=>{
  if(menu.classList.contains('spread') && e.target != menu && e.target != menuButton){
    menu.classList.toggle('spread');
    menuButton.classList.toggle('hide');
    cerrar.classList.toggle('hide');
  }
})