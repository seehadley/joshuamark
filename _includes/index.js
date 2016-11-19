// init Isotope
var grid = document.querySelector('.Masonry');

window.onload = function() {
  var msnry = new Masonry( grid, {
    itemSelector: '.Masonry-item',
    columnWidth: '.Masonry-gridSizer',
    gutter: '.Masonry-gutterSizer',
    percentPosition: true
  });

  imagesLoaded( grid ).on( 'progress', function() {
    // layout Masonry after each image loads
    // msnry.layout();
    alert(this);

  });
}

// https://remysharp.com/2010/07/21/throttling-function-calls
var unloadedList = document.querySelectorAll('.not-loaded');
var listLength = unloadedList.length;

window.onscroll = throttle(function() {
  for (i = 0; i < listLength; i++) {
    if(isInViewport(unloadedList[i])) {
      unloadedList[i].classList.remove('not-loaded');
    }
  }
})

function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.top <= ((window.innerHeight + 40) || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}
