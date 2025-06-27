const $btnBack = document.querySelector(".btn-back"),
    $btnNext = document.querySelector(".btn-next"),
    $cards = document.querySelectorAll(".projects-card[data-index]");

    
export const pasarSliceD = () => {
    document.addEventListener("click", e => {
        if(e.target === $btnNext || e.target.matches(".fa-arrow-right")){
            $cards.forEach(slice => {
                slice.dataset.index++;

                if(slice.dataset.index > 2){
                    slice.dataset.index = 0;
                    console.log(slice.dataset.index)
                }
            })
        }

        if(e.target === $btnBack || e.target.matches(".fa-arrow-left")){

        }


    })
}

