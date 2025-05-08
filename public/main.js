const topMenu = document.getElementById("cf-top-menu");
const toggleMenu = document.getElementById("cf-toggle-menu-icon");

document.addEventListener("click", (e) => {
  if (toggleMenu.contains(e.target)) { // Nếu người dùng click vào icon menu:
    // click menu icon
    topMenu.classList.toggle("cf-topmenu_expand");
    topMenu.classList.toggle("hidden");
  } else {
    if(topMenu.classList.contains("cf-topmenu_expand")){
      // click outside menu
      topMenu.classList.remove("cf-topmenu_expand");
      topMenu.classList.add("hidden");
    }
  }
});

const menuItems = document.querySelectorAll('.cf-top-menu-item');

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuItems.forEach(i => i.classList.remove('cf-top-menu-item-active'));
    item.classList.add('cf-top-menu-item-active');
  });
});
