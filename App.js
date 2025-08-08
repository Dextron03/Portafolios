import { arrowUp } from "./assets/js/arrow.js";
import { activarHamberguer } from "./assets/js/hamberguer.js";
import { pasarSlice } from "./assets/js/slider-proyectos.js"
import { type } from "./assets/js/type.js";

export const App = () => {
    pasarSlice();
    arrowUp();
    activarHamberguer();
    type();
}