
var homePageName = document.querySelector("#home-page-name");
var headline = document.querySelector("#headline");
var subHeadline = document.querySelector("#subHeadline");
var links = document.querySelectorAll(".nav-item");

function animateHomePage(title, heading, subHeading) {
  anime({
    targets: title,
    opacity: [0, 1],
    delay: 50,
    translateY: [-100, 0],
    easing: 'easeInOutExpo'
  });


  anime({
    targets: heading,
    opacity: [0, 1],
    delay: 125,
    translateX: [-100, 0],
    easing: 'easeInOutExpo'
  });

  anime({
    targets: subHeading,
    opacity: [0, 1],
    delay: 150,
    translateY: [100, 0],
    easing: 'easeInOutExpo'
  });
};


function loadLinks() {
  if (window.location.pathname == "/") {
    anime({
      targets: links,
      opacity: [0, 1],
      delay: anime.stagger(150),
      duration: 2000,
      easing: 'easeInOutExpo'
    })
  }
};

loadLinks("/");
animateHomePage(homePageName, headline, subHeadline);


function stickyNav() {
  let navBar = document.querySelector('.navbar');
  let sticky = navBar.offsetTop;

  if (window.scrollY > 200) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}

window.addEventListener('scroll', stickyNav);