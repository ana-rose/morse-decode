import { morseCode } from "./morse-code.js";

export const englishToMorse = (input) => {
    const morseArray = input
        .toLowerCase()
        .split("")
        .map((char) => morseCode[char]);
    const myMorse = morseArray.join(" ");

    const englishInputError = new Error("Invalid characters");
    const noEnglishInputError = new Error("Input field is empty");

    if (!input.match(/^[\s\w.,!?'/&:;=+"@_$()]+$/) && input !== "") {
        throw englishInputError;
    }
    if (input === "") {
        throw noEnglishInputError;
    }

    return myMorse;
};
