import { morseReversed } from "./morseReversed.js";

export const morseToEnglish = (input) => {
    const englishArray = input
        .split(" ")
        .map((char) => (char = morseReversed[char]));
    const myEnglish = englishArray.join("");

    const inputError = new Error("Invalid input - not Morse code");
    const noInputError = new Error("Input field is empty");

    if (!input.match(/^[\s/./-]+$/) && input !== "") {
        throw inputError;
    }
    if (input === "") {
        throw noInputError;
    }

    return myEnglish;
};
