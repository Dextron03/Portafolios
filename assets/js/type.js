const $nameElement = document.querySelector('.full-name');

// Texto a escribir, separado por líneas
const lines = [
    "Braily",
    "Roman"
];

let currentLine = 0;
let currentChar = 0;
let isDeleting = false;

export const type = () => {
        if (currentLine >= lines.length) {
            $nameElement.style.borderRight = 'none';
            $nameElement.classList.remove('typing');
            return;
        }

        const currentText = lines[currentLine];
        
        $nameElement.innerHTML = lines.slice(0, currentLine).join(' ') + 
                                (currentLine < lines.length ? ' ' : '') + 
                                currentText.substring(0, currentChar);

        if (!isDeleting && currentChar < currentText.length) {
            currentChar++;
            setTimeout(type, 150);
        } else {
            isDeleting = false;
            currentChar = 0;
            currentLine++;
            setTimeout(type, 500);
        }
}
