import Parser from './Parser';

const contextAssignmentRegex = /^((?:\.?[a-zA-z0-9])*)\s*:\s*([^;]*;)/;

export default class contextAssignmentParser extends Parser {
    constructor() {
        super(contextAssignmentRegex);
    }

    parse(textToParse) {
        const match = contextAssignmentRegex.exec(textToParse);
        
        if(!match || match.length < 3) {
            /* Unable to extraxt a variable name and
               its assigned value, return the text as-is. */
            return textToParse;
        }

        const variableName = match[1];
        const assignedValue = match[2];
        const remainingText = textToParse.replace(match[0], "") || "";

        return `${variableName.trim()}: ${assignedValue} ${remainingText}`;
    }
}