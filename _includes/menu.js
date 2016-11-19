var nav = document.querySelector('.Nav');
var mobMenuLink = document.querySelector('.Header-menuIcon');

mobMenuLink.addEventListener('click', function(e) {
  e.preventDefault();
  if (nav.classList.contains('is-displayed')) {
    nav.classList.remove('is-displayed');
  } else {
    nav.classList.add('is-displayed');
  }
});
