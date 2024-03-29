const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const body = document.body;

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
   event.preventDefault();
    document.body.classList.toggle("no-scroll");
});

const Arrows = document.querySelectorAll('.ClickArrow');
const Collapses = document.querySelectorAll('.CollapsibleContent');

Arrows.forEach((arrow, index) => {
  arrow.addEventListener('click', () => {
    Collapses[index].classList.toggle('hidden');
    arrow.classList.toggle('rotate-up');
    Collapses[index].classList.toggle('show');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  showImage('img25');
});

function showImage(imageId) {
  const imageContainers = document.querySelectorAll('#image-result > div');
  
  imageContainers.forEach(container => {
    if (container.id === imageId) {
      container.style.display = 'block';
    } else {
      container.style.display = 'none';
    }
  });
}

window.addEventListener('scroll', function() {
  const stickySection = document.getElementById('sticky-section');
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 20) {
    stickySection.classList.add('fixed', 'top-0', 'w-full');
    stickySection.style.width = '';
  } else {
    stickySection.classList.remove('fixed', 'top-0');
    stickySection.style.width = 'auto';
  }
});


let currentIndex = 0;
const numSlides = document.querySelectorAll('.carousel-item').length;
const slider = document.querySelector('.carousel-slider');

function prevSlide() {
  currentIndex = (currentIndex - 1 + numSlides) % numSlides;
  updateCarousel();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % numSlides;
  updateCarousel();
}

function updateCarousel() {
  const translateX = -currentIndex * 100 + '%';
  slider.style.transform = `translateX(${translateX})`;
}
