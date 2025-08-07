export const arrowUp = () => {
    const $arrowUp = document.querySelector(".arrow-up");

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;

        if (scrollTop >= 200) {
            $arrowUp.classList.add("show");
        } else {
            $arrowUp.classList.remove("show");
        }
    });

    document.addEventListener("click", e => {
        if (e.target === $arrowUp ||  e.target.matches(".fa-arrow-up")) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    });
};

