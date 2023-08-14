// function togglemenu() {
//     if (mobileMenu.style.maxHeight == "0px") {
//         mobileMenu.style.maxHeight = "130px";
//     } else {
//         mobileMenu.style.maxHeight = "0px";
//     }
// }


const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const body = document.body;

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
   Event.preventDefault();
    document.body.classList.toggle("no-scroll");
});