

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-64px";
  }
}

var navbar = document.getElementById('navbar');
var oldScroll = window.scrollY;

if(window.innerWidth > 1023) {
    window.addEventListener('scroll', async function () {
        if(oldScroll > window.scrollY) {
            navbar.style.zIndex = 50;
            navbar.classList.remove('fade-out');
            navbar.classList.add('fade-in');
        } else {
            navbar.classList.remove('fade-in');
            navbar.classList.add('fade-out');
            await sleep(500);
            navbar.style.zIndex = -1;
        }
        oldScroll = window.scrollY;
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
