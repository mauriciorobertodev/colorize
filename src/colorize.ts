import { Builder, BuilderConfig } from './builder';
import { Color } from './colors';

function paint(text: string, color: Color): string {
    return `${color}${text}${Color.RESET}`;
}

function createColorFunction(color: Color): (text: string) => string {
    return (text: string) => paint(text, color);
}

export const reset = createColorFunction(Color.RESET);
export const bold = createColorFunction(Color.BRIGHT);
export const bright = createColorFunction(Color.BRIGHT);
export const unBold = createColorFunction(Color.UN_BRIGHT);
export const unBright = createColorFunction(Color.UN_BRIGHT);
export const dim = createColorFunction(Color.DIM);
export const unDim = createColorFunction(Color.UN_BRIGHT);
export const underscore = createColorFunction(Color.UNDERSCORE);
export const unUnderscore = createColorFunction(Color.UN_UNDERSCORE);
export const blink = createColorFunction(Color.BLINK);
export const unBlink = createColorFunction(Color.UN_BLINK);
export const reverse = createColorFunction(Color.REVERSE);
export const unReverse = createColorFunction(Color.UN_REVERSE);
export const hidden = createColorFunction(Color.HIDDEN);
export const unHidden = createColorFunction(Color.UN_HIDDEN);
export const black = createColorFunction(Color.BLACK);
export const red = createColorFunction(Color.RED);
export const green = createColorFunction(Color.GREEN);
export const yellow = createColorFunction(Color.YELLOW);
export const blue = createColorFunction(Color.BLUE);
export const magenta = createColorFunction(Color.MAGENTA);
export const cyan = createColorFunction(Color.CYAN);
export const white = createColorFunction(Color.WHITE);
export const bgBlack = createColorFunction(Color.BG_BLACK);
export const bgRed = createColorFunction(Color.BG_RED);
export const bgGreen = createColorFunction(Color.BG_GREEN);
export const bgYellow = createColorFunction(Color.BG_YELLOW);
export const bgBlue = createColorFunction(Color.BG_BLUE);
export const bgMagenta = createColorFunction(Color.BG_MAGENTA);
export const bgCyan = createColorFunction(Color.BG_CYAN);
export const bgWhite = createColorFunction(Color.BG_WHITE);
export const unBg = createColorFunction(Color.UN_BG);

export const colorize = (config?: BuilderConfig) => new Builder(config);
