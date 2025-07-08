window.HELP_IMPROVE_VIDEOJS = false;

document.addEventListener('DOMContentLoaded', () => {
  bulmaCarousel.attach('.results-carousel', {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    navigation: true,
    pagination: true,
  });

  bulmaSlider.attach();
});
