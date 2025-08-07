export const activarHamberguer = () => {
    const $btnHamburger = document.querySelector(".hamburger"),
        $navBar = document.querySelector(".navbar");


    $btnHamburger.addEventListener("click", () => {
        $btnHamburger.classList.toggle("is-active");
        $navBar.classList.toggle("is-active");
    });
};
