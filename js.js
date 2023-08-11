// function togglemenu() {
//     if (mobileMenu.style.maxHeight == "0px") {
//         mobileMenu.style.maxHeight = "130px";
//     } else {
//         mobileMenu.style.maxHeight = "0px";
//     }
// }


function menuClick() {
    const menuIcon = document.getElementById('menuIcon');
    menuIcon.classList.toggle('bx-menu-alt-right');
    menuIcon.classList.toggle('bx-x');
}