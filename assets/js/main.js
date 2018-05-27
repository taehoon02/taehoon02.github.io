$(document).ready(function() {
  $(".typed").typed({
    strings: ["WorldEdit.", "PandongEditor.", "Hangul, not Difficult.", "MapleStory Blog.", "Android_Subject.", "IrenebodeWeb."],
    stringsElement: null,
    typeSpeed: 120,
    startDelay: 0,
    backSpeed: 80,
    backDelay: 800,
    loop: true,
    showCursor: false
  });

  $('.scroll-wrap').click(function() {
    $('html, body').animate({
      scrollTop: ($('.container.two').offset().top)
    }, 1000);
  });
});
