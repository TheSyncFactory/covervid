fullscreen();
loadVideo();
$(window).resize(fullscreen);
$(window).resize(loadVideo);
$(window).scroll(headerParallax);

function fullscreen() {
  var masthead = $('.masthead');
  var windowH = $(window).height();

  masthead.height(windowH);
}

function loadVideo() {
  var container = $('.masthead');
  var windowW = $(window).width();
  var video = $('video', container);

  if (windowW > 640) {
    if (video.length > 0) {
      video.css('visibility', 'visible');
    } else {
      container.prepend('<video class="masthead-video" autoplay loop muted poster="assets/images/poster.jpg"><source src="assets/videos/dreamscapes.mp4" type="video/mp4"><source src="assets/videos/dreamscapes.webm" type="video/webm"></video>');
      $('.masthead-video').coverVid(1280, 720);
    }
  } else {
    if (video.length > 0) {
      video.css('visibility', 'hidden');
    }
  }
}

function headerParallax() {
  var windowW = $(window).width();

  if (windowW < 640) {
    return;
  }

  var st = $(window).scrollTop();
  var headerScroll = $('.masthead h1');

  if (st < 500) {
    headerScroll.css('opacity', 1-st/1000);
    $('.masthead-arrow ').css('opacity', 0.5-st/250);
    headerScroll.css({
      '-webkit-transform' : 'translateY(' + st/7 + '%)',
      '-ms-transform' : 'translateY(' + st/7 + '%)',
      transform : 'translateY(' + st/7 + '%)'
    });
  }
}
