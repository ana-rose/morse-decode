import { englishToMorse } from "./js modules/englishToMorse.js";
import { expect, it, describe } from "@jest/globals";

describe("Testing englishToMorse function", () => {
    const englishInputError = new Error("Invalid characters");
    const noEnglishInputError = new Error("Input field is empty");

    it("Should return right translation from English into Morse code", () => {
        expect(englishToMorse("hello")).toBe(".... . .-.. .-.. ---");
    });
    it("Should return right translation from English into Morse code", () => {
        expect(englishToMorse("123 hello")).toBe(
            ".---- ..--- ...-- / .... . .-.. .-.. ---",
        );
    });
    it("Should return right translation from English into Morse code", () => {
        expect(englishToMorse("hi!$?")).toBe(".... .. -.-.-- ...-..- ..--..");
    });
    it("Should return an error when input is not in English", () => {
        expect(() => englishToMorse("è")).toThrow(englishInputError);
        expect(() => englishToMorse("hôtel")).toThrow(englishInputError);
    });
    it("Should return an error when there is no input", () => {
        expect(() => englishToMorse("")).toThrow(noEnglishInputError);
    });
});
