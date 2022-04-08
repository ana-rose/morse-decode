import { createElementWithText } from "./js modules/dom-utensils.js";
import { morseToEnglish } from "./js modules/morseToEnglish.js";
import { englishToMorse } from "./js modules/englishToMorse.js";

const submitEnglish = document.getElementById("submitEnglish");
const submitMorse = document.getElementById("submitMorse");
const clearResult = document.getElementById("clearResult");

// Event listener (click) for "To Morse" button
submitEnglish.addEventListener("click", (event) => {
    event.preventDefault();
    const input = document.getElementById("textarea").value;
    // englishToMorse(input);
    const result = document.getElementById("result");
    const myInput = /^[\s\w.,!?'/&:;=+"@_$()]+$/;
    if (input !== "" && !input.match(myInput)) {
        return alert("Invalid characters");
    } else if (input === "") {
        return alert("Nothing to translate!");
    } else {
        englishToMorse(input);
        createElementWithText("p", englishToMorse(input), result);
    }
    result.removeChild(result.childNodes[1]);
});

// Event listener (click) for "To English" button
submitMorse.addEventListener("click", (event) => {
    event.preventDefault();
    const input = document.getElementById("textarea").value;
    const result = document.getElementById("result");
    const letters = /^[\s/./-]+$/;
    if (input !== "" && !input.match(letters)) {
        alert("Wrong button! This is not Morse code.");
    } else if (input === "") {
        return alert("Nothing to translate!");
    } else {
        morseToEnglish(input);
        createElementWithText("p", morseToEnglish(input), result);
    }
    result.removeChild(result.childNodes[1]);
});

// Event listener (click) for "Clear Translation" button
clearResult.addEventListener("click", () => {
    result.innerHTML = "";
});
