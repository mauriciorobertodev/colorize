export type ColorFunction = (text: string) => string;

export type ColorFunctions = {
    reset: ColorFunction;
    bright: ColorFunction;
    dim: ColorFunction;
    underscore: ColorFunction;
    blink: ColorFunction;
    reverse: ColorFunction;
    hidden: ColorFunction;
    black: ColorFunction;
    red: ColorFunction;
    green: ColorFunction;
    yellow: ColorFunction;
    blue: ColorFunction;
    magenta: ColorFunction;
    cyan: ColorFunction;
    white: ColorFunction;
    bgBlack: ColorFunction;
    bgRed: ColorFunction;
    bgGreen: ColorFunction;
    bgYellow: ColorFunction;
    bgBlue: ColorFunction;
    bgMagenta: ColorFunction;
    bgCyan: ColorFunction;
    bgWhite: ColorFunction;
};
