const nav_section_divs = document.querySelectorAll(".nav_section_div > h4");
const main_h2s = document.querySelectorAll("main > h2");
const body = document.querySelector('body');

nav_section_divs.forEach(div => div.addEventListener('click', eventHandlerFn));

function eventHandlerFn() {
  const panel = this.nextElementSibling;
  panel.classList.toggle('toggle-open');
}

main_h2s.forEach(heading => heading.addEventListener('click', displaySection));

function displaySection() {
  const panel = this.nextElementSibling;
  panel.classList.toggle('toggle-open');
}

