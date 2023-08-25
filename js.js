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


//loading aspect
// const loaded = document.getElementById('whole-page');

// setTimeout(function() {
//     function itemDisplay() {
//         loaded.innerHTML = "loaded";
//     }
//     itemDisplay();
// }, 1000);

const latteImageContainer = document.getElementById('img25');
const latteTextContainer = document.getElementById('text25');


function showImage(imageId) {
  const imageContainers = document.querySelectorAll('#image-result > div');
  imageContainers.forEach(container => {
    container.classList.add('hidden');
  });

  const selectedContainer = document.getElementById(imageId);
  if (selectedContainer) {
    selectedContainer.classList.remove('hidden');
  }
}