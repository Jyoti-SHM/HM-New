function initSlider(trackId) {
  const track = document.getElementById(trackId);
  if (!track) return;

  const slides = track.querySelectorAll('.slide');
  let index = 0;

  function getVisibleSlides() {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 992) return 2;
    return 3;
  }

  function moveSlider() {
    const visibleSlides = getVisibleSlides();
    const totalSlides = slides.length;

    if (index > totalSlides - visibleSlides) {
      index = 0;
    }

    const slideWidth = slides[0].offsetWidth + 15; // gap included
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  // autoplay
  setInterval(() => {
    index++;
    moveSlider();
  }, 3000);

  // fix on resize
  window.addEventListener("resize", moveSlider);
}

// INIT ALL SLIDERS
document.addEventListener("DOMContentLoaded", function () {
  initSlider("slider-track1");
  initSlider("slider-track2");
  initSlider("slider-track3");
});