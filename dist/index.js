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

const gallery = document.getElementById("gallery");
const moreBtn = document.getElementById("more-btn");

function toggleHeight(){
    if (moreBtn.textContent == "Less") {
        gallery.classList.replace("h-full", "h-70vh");
        moreBtn.textContent = "More";
      } else {
        gallery.classList.replace("h-70vh", "h-full");
        moreBtn.textContent = "Less";
      }
}
moreBtn.addEventListener("click", toggleHeight);

let copyright_Year = document.querySelector(".copyright-year");
copyright_Year.textContent = new Date().getFullYear();

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

// document.querySelector('.fa-xmark').addEventListener('click', ()=>{
//     nav_menu.classList.add('h-0', 'overflow-hidden');
//     toggle_icons.classList.replace('fa-xmark', 'fa-bars');
// })

toggle_menu_btn.addEventListener("click", toggleMenu);

