import { morseCode } from "./morse-code.js";
import { createElementWithText } from "./dom-utensils.js";

const submitEnglish = document.getElementById("submitEnglish");
const submitMorse = document.getElementById("submitMorse");
const clearResult = document.getElementById("clearResult");

// Event listener (click) for "To Morse" button
submitEnglish.addEventListener("click", (event) => {
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

// Reversing the Morse object key value pairs
const morseReversed = Object.entries(morseCode).reduce((acc, entry) => {
    acc[entry[1]] = entry[0];
    return acc;
}, {});

// Event listener (click) for "To English" button
submitMorse.addEventListener("click", (event) => {
    event.preventDefault();
    const input = document.getElementById("textarea").value;
    const result = document.getElementById("result");
    const letters = /^[\s/./-]+$/;
    if (!input.match(letters)) {
        alert("Wrong button! Morse characters can only contain - . and /");
    } else {
        morseToEnglish(input);
        createElementWithText("p", morseToEnglish(input), result);
        if (input === "") {
            return alert("Nothing to translate!");
        }
    }
    if (input === "") {
        return alert("Nothing to translate!");
    }
    result.removeChild(result.childNodes[1]);
});

// Event listener (click) for "Clear Translation" button
clearResult.addEventListener("click", () => {
    result.innerHTML = "";
});

// Translation functions :

const englishToMorse = (input) => {
    const morseArray = input
        .toLowerCase()
        .split("")
        .map((char) => morseCode[char]);
    const myMorse = morseArray.join("  ");
    return myMorse;
};
const morseToEnglish = (input) => {
    const englishArray = input.split(" ").map((char) => morseReversed[char]);

    const myEnglish = englishArray.join("");
    return myEnglish;
};
