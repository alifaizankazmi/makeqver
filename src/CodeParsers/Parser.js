export default class Parser {
    constructor(regex) {
        this.regex = regex;
    }

    parse(textToParse) {
        throw new Error(`Attempt to call the parse function with text: 
            ${textToParse}. Please implement the parse function`);
    }
}