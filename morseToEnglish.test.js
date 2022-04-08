import { morseToEnglish } from "./js modules/morseToEnglish";
import { expect, it, describe } from "@jest/globals";

describe("Testing morseToEnglish function", () => {
    const inputError = new Error("Invalid input - not Morse code");
    const noInputError = new Error("Input field is empty");
    it("Should return right translation from Morse code into English", () => {
        expect(morseToEnglish(".-")).toBe("a");
        expect(morseToEnglish(".---- ..---")).toBe("12");
        expect(
            morseToEnglish("...-- ..... .-.-. ..--- -...- ...-- --... -.-.-."),
        ).toBe("35+2=37;");
        expect(
            morseToEnglish(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."),
        ).toBe("hello world");
    });
    it("Should return an error when input is not in Morse code", () => {
        expect(() => morseToEnglish("a")).toThrow(inputError);
        expect(() => morseToEnglish("12")).toThrow(inputError);
    });
    it("Should return an error when there is no input", () => {
        expect(() => morseToEnglish("")).toThrow(noInputError);
    });
});
