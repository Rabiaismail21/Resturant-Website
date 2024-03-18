// smooth scroll (scroll reveal js library)
ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal("#hero-content", { delay: 100, origin: "left" });
ScrollReveal().reveal("#navbar", { delay: 100, origin: "top" });
ScrollReveal().reveal("h2", { delay: 50, origin: "left" });


// food gallery height

const gallery = document.getElementById("gallery-container");
const moreBtn = document.getElementById("more-btn");

function toggleHeight(){
    if (moreBtn.textContent == "Less") {
        gallery.classList.replace("md:h-full", "md:h-70vh");
        moreBtn.textContent = "More";
      } else {
        gallery.classList.replace("md:h-70vh", "md:h-full");
        moreBtn.textContent = "Less";
      }
}
moreBtn.addEventListener("click", toggleHeight);

// update copyright year in footer dynamically
let copyright_Year = document.querySelector(".copyright-year");
copyright_Year.textContent = new Date().getFullYear();

// navbar collapse in mobile view
let toggle_menu_btn = document.querySelector("#toggle-menu-btn");
let nav_menu = document.querySelector("#nav-items");

const toggleMenu = () => {
  if (nav_menu.classList.contains("h-0", "overflow-hidden")) {
    nav_menu.classList.remove("h-0", "overflow-hidden");
    toggle_menu_btn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    nav_menu.classList.add("h-0", "overflow-hidden");
    toggle_menu_btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
};
toggle_menu_btn.addEventListener("click", toggleMenu);

