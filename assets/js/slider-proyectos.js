const $btnBack = document.querySelector(".btn-next-project"),
    $btnNext = document.querySelector(".btn-prev-project"),
    $cards = document.querySelectorAll(".project-card[data-index]");

export const pasarSlice = () => {
    document.addEventListener("click", e => {
        if(e.target === $btnNext || e.target.matches(".fa-arrow-right")){
            $cards.forEach(slice => {
                slice.dataset.index++;

                if(slice.dataset.index > 2){
                    slice.dataset.index = 0;
                }
            })
        }

        if(e.target === $btnBack || e.target.matches(".fa-arrow-left")){
            $cards.forEach(slice => {
                slice.dataset.index--;

                if(slice.dataset.index < 0){
                    slice.dataset.index = 2;
                }
            })
        }
    })
}

