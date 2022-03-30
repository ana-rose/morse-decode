import { morseCode } from "./morse-code.js";
import { createElementWithText } from "./dom-utensils.js";

const submit = document.getElementById("submit");
const clearResult = document.getElementById("clearResult");

submit.addEventListener("click", (event) => {
    event.preventDefault();
    const input = document.getElementById("textarea").value;
    englishToMorse(input);
    const result = document.getElementById("result");
    createElementWithText("p", englishToMorse(input), result);
    if (input === "") {
        return alert("Nothing to translate!");
    }
    result.removeChild(result.childNodes[1]);
});
clearResult.addEventListener("click", () => {
    result.innerHTML = "";
});
const englishToMorse = (input) => {
    const morseArray = input
        .toLowerCase()
        .split("")
        .map((char) => morseCode[char]);
    const myMorse = morseArray.join("  ");
    return myMorse;
};
