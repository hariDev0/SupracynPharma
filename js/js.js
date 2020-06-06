var App = (function () {

  //=== Use Strict ===//
  'use strict';

  //=== Private Variables ===//
  var gallery = $('#js-gallery');

  //=== Gallery Object ===//
  var Gallery = {
    zoom: function(imgContainer, img) {
      var containerHeight = imgContainer.outerHeight(),
      src = img.attr('src');
      
      if ( src.indexOf('/products/normal/') != -1 ) {
        // Set height of container
        imgContainer.css( "height", containerHeight );
        
        // Switch hero image src with large version
        img.attr('src', src.replace('/products/normal/', '/products/zoom/') );
        
        // Add zoomed class to gallery container
        gallery.addClass('is-zoomed');
        
        // Enable image to be draggable
        img.draggable({
          drag: function( event, ui ) {
            ui.position.left = Math.min( 100, ui.position.left );
            ui.position.top = Math.min( 100, ui.position.top );
          }
        });
      } else {
        // Ensure height of container fits image
        imgContainer.css( "height", "auto" );
        
        // Switch hero image src with normal version
        img.attr('src', src.replace('/products/zoom/', '/products/normal/') );
        
        // Remove zoomed class to gallery container
        gallery.removeClass('is-zoomed');
      }
    },
    switch: function(trigger, imgContainer) {
      var src = trigger.attr('href'),
      thumbs = trigger.siblings(),
			img = trigger.parent().prev().children();
      
      // Add active class to thumb
      trigger.addClass('is-active');
      
      // Remove active class from thumbs
      thumbs.each(function() {
        if( $(this).hasClass('is-active') ) {
          $(this).removeClass('is-active');
        }
      });

      // Reset container if in zoom state
      if ( gallery.hasClass('is-zoomed') ) {
        gallery.removeClass('is-zoomed');
        imgContainer.css( "height", "auto" );
      }

      // Switch image source
      img.attr('src', src);
    }
  };

  //=== Public Methods ===//
  function init() {

    // Listen for clicks on anchors within gallery
    gallery.delegate('a', 'click', function(event) {
      var trigger = $(this);
      var triggerData = trigger.data("gallery");

      if ( triggerData === 'zoom') {
        var imgContainer = trigger.parent(),
        img = trigger.siblings();
        Gallery.zoom(imgContainer, img);
      } else if ( triggerData === 'thumb') {
        var imgContainer = trigger.parent().siblings();
        Gallery.switch(trigger, imgContainer);
      } else {
        return;
      }

      event.preventDefault();
    });

  }

  //=== Make Methods Public ===//
  return {
    init: init
  };

})();

App.init();

function magnify(imgID, zoom) {
  
  // alert(document.getElementById("myimage"));

  var img, glass, w, h, bw;
  img = document.getElementById("myimage");

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}