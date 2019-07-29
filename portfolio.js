const hamburger = document.querySelector('i');
const menu_overlay = document.querySelector('.menu_div');
const toTopBtn = document.querySelector('#toTopBtn');

hamburger.addEventListener('click', slideMenu);

function slideMenu() {
  menu_overlay.classList.toggle('show_menu');
}

menu_overlay.addEventListener('click', hideMenu);

function hideMenu() {
  menu_overlay.classList.remove('show_menu');
}


document.addEventListener('scroll', scrollFunction);

function scrollFunction(e) {
  if (e.pageY > 50) {
    toTopBtn.style.display = 'block';
  } else {
    toTopBtn.style.display = 'none';
  }
}

toTopBtn.addEventListener('click', backToTop);

function backToTop() {
  console.log('hi mom');
  //how do I scroll back to the top?
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}
