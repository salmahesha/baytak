document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("max-h-0");
    mobileMenu.classList.toggle("opacity-0");
    mobileMenu.classList.toggle("max-h-96");
    mobileMenu.classList.toggle("opacity-100");
  });

  const links = mobileMenu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("max-h-0", "opacity-0");
      mobileMenu.classList.remove("max-h-96", "opacity-100");
    });
  });

});
