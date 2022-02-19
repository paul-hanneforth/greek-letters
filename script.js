const letters = ["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ", "τ", "υ", "φ", "χ", "ψ", "ω"];
const uppercaseLetters = ["Α", "Β", "Γ", "Δ", "Ε", "Ζ", "Η", "Θ", "Ι", "Κ", "Λ", "Μ", "Ν", "Ξ", "Ο", "Π", "Ρ", "Σ", "Τ", "Υ", "Φ", "Χ", "Ψ", "Ω"];
const names = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Jota", "Kappa", "Lambda", "Mu", "Nu", "Xi", "Omikron", "Pi", "Rho", "Sigma", "Tau", "Ypsilon", "Phi", "Chi", "Psi", "Omega"];

const namesArea = document.querySelector(".names-area")
const lowercaseKeyboard = document.querySelector(".lowercase-keyboard");
const uppercaseKeyboard = document.querySelector(".uppercase-keyboard");
const deleteLastButton = document.querySelector(".controls .del-last");

deleteLastButton.addEventListener("click", () => {
    namesArea.innerText = namesArea.innerText.split(" ").filter((_, index) => index != (namesArea.innerText.split(" ").length - 1)).join(" ");
});

const addLetter = (letter) => {
    if(letters.indexOf(letter) != -1) {

        namesArea.innerText = `${namesArea.innerText} ${names[letters.indexOf(letter)]}`;

    } else if(uppercaseLetters.indexOf(letter) != -1) {

        namesArea.innerText = `${namesArea.innerText} ${names[uppercaseLetters.indexOf(letter)]}`;
        
    } else {
        console.error("Couldn't find letter!");
    }
}

letters.forEach((letter) => {
    const btn = document.createElement("button");
    btn.innerText = letter;
    lowercaseKeyboard.appendChild(btn);
    btn.onclick = () => addLetter(letter);
})
uppercaseLetters.forEach((letter) => {
    const btn = document.createElement("button");
    btn.innerText = letter;
    uppercaseKeyboard.appendChild(btn);
    btn.onclick = () => addLetter(letter);
})