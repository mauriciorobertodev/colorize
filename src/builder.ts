import { Color } from './colors';

export type BuilderConfig = {
    start?: string;
    after?: string;
    before?: string;
};

export class Builder {
    private content: string = '';
    private after: string = '';
    private before: string = '';

    constructor(config?: BuilderConfig) {
        this.content = config?.start ?? '';
        this.after = config?.after ?? '';
        this.before = config?.before ?? '';
    }

    private applyColor(color: Color, text: string): Builder {
        if (!text) this.content += `${color}${text}`;
        if (text) this.content += `${this.before}${color}${text}${this.after}`;
        return this;
    }

    private applyBgColor(color: Color): Builder {
        this.content += `${color}`;
        return this;
    }

    // colors
    red(text: string = ''): Builder {
        return this.applyColor(Color.RED, text);
    }

    black(text: string = ''): Builder {
        return this.applyColor(Color.BLACK, text);
    }

    green(text: string = ''): Builder {
        return this.applyColor(Color.GREEN, text);
    }

    yellow(text: string = ''): Builder {
        return this.applyColor(Color.YELLOW, text);
    }

    blue(text: string = ''): Builder {
        return this.applyColor(Color.BLUE, text);
    }

    magenta(text: string = ''): Builder {
        return this.applyColor(Color.MAGENTA, text);
    }

    cyan(text: string = ''): Builder {
        return this.applyColor(Color.CYAN, text);
    }

    white(text: string = ''): Builder {
        return this.applyColor(Color.WHITE, text);
    }

    // Effects

    bright(text: string = ''): Builder {
        if (!text) this.content += Color.BRIGHT;
        if (text) this.bright().text(text).unBoldBright();
        return this;
    }

    bold(text: string = ''): Builder {
        if (!text) this.content += Color.BRIGHT;
        if (text) this.bold().text(text).unBoldBright();
        return this;
    }

    dim(text: string = ''): Builder {
        if (!text) this.content += Color.DIM;
        if (text) this.dim().text(text).unBoldBright();
        return this;
    }

    underscore(text: string = ''): Builder {
        if (!text) this.content += Color.UNDERSCORE;
        if (text) this.underscore().text(text).unUnderscore();
        return this;
    }

    blink(text: string = ''): Builder {
        if (!text) this.content += Color.BLINK;
        if (text) this.blink().text(text).unBoldBright();
        return this;
    }

    hidden(text: string = ''): Builder {
        if (!text) this.content += Color.HIDDEN;
        if (text) this.hidden().text(text).unHidden();
        return this;
    }

    reverse(text: string = ''): Builder {
        if (!text) this.content += Color.REVERSE;
        if (text) this.reverse().text(text).unReverse();
        return this;
    }

    // background
    bgBlack(text: string = ''): Builder {
        if (!text) this.applyBgColor(Color.BG_BLACK);
        if (text) this.bgBlack().text(text).unBg();
        return this;
    }

    bgRed(text: string = ''): Builder {
        if (!text) this.applyBgColor(Color.BG_RED);
        if (text) this.bgRed().text(text).unBg();
        return this;
    }

    bgGreen(text: string = ''): Builder {
        if (!text) this.applyBgColor(Color.BG_GREEN);
        if (text) this.bgGreen().text(text).unBg();
        return this;
    }

    bgYellow(text: string = ''): Builder {
        if (!text) this.applyBgColor(Color.BG_YELLOW);
        if (text) this.bgYellow().text(text).unBg();
        return this;
    }

    bgBlue(text: string = ''): Builder {
        if (!text) this.applyBgColor(Color.BG_BLUE);
        if (text) this.bgBlue().text(text).unBg();
        return this;
    }

    bgMagenta(text: string = ''): Builder {
        if (!text) this.applyBgColor(Color.BG_MAGENTA);
        if (text) this.bgMagenta().text(text).unBg();
        return this;
    }

    bgCyan(text: string = ''): Builder {
        if (!text) this.applyBgColor(Color.BG_CYAN);
        if (text) this.bgCyan().text(text).unBg();
        return this;
    }

    bgWhite(text: string = ''): Builder {
        if (!text) this.applyBgColor(Color.BG_WHITE);
        if (text) this.bgWhite().text(text).unBg();
        return this;
    }

    unBg(): Builder {
        this.content += Color.UN_BG;
        return this;
    }

    unBoldBright(): Builder {
        this.content += Color.UN_BRIGHT;
        return this;
    }

    unBlink(): Builder {
        this.content += Color.UN_BLINK;
        return this;
    }

    unUnderscore(): Builder {
        this.content += Color.UN_UNDERSCORE;
        return this;
    }

    unReverse(): Builder {
        this.content += Color.UN_REVERSE;
        return this;
    }

    unHidden(): Builder {
        this.content += Color.UN_HIDDEN;
        return this;
    }

    reset(): Builder {
        this.content += Color.RESET;
        return this;
    }

    build(): string {
        this.reset();
        return this.content;
    }

    toString(): string {
        return this.build();
    }

    setAfter(text: string) {
        this.after = text;
        return this;
    }

    setBefore(text: string) {
        this.before = text;
        return this;
    }

    resetText(): Builder {
        this.content = `${Color.RESET}`;
        return this;
    }

    text(text: string): Builder {
        this.content += `${this.before}${text}${this.after}`;
        return this;
    }
}
