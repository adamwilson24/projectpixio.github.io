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

document.addEventListener("DOMContentLoaded", function () {
  const clickableDiv = document.getElementById("clickableDiv");

  clickableDiv.addEventListener("click", function () {
    this.classList.add("active"); // Add a class to trigger the transition
  });
});
