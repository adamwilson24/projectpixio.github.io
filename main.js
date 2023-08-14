const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
  this.classList.toggle('is-active');
})

const logo = document.getElementById('page-logo');
logo.addEventListener('click', () => {
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
});