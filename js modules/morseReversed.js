import { morseCode } from "./morse-code.js";
export const morseReversed = Object.entries(morseCode).reduce((acc, entry) => {
    acc[entry[1]] = entry[0];
    return acc;
}, {});
