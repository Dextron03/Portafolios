const $btnHamburger = document.querySelector(".hamburger"),
$navBar = document.querySelector(".navbar");

export const activarHamberguer = () => {
    

    $btnHamburger.addEventListener("click", () => {
        $btnHamburger.classList.toggle("is-active");
        $navBar.classList.toggle("is-active");
    });
};

export const bloqquearScroll = () => {
    const $body = document.body;

    $btnHamburger.addEventListener("click", () => {
        $body.classList.toggle("no-scroll");
    });
}
