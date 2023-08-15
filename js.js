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
