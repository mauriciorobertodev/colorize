import { bgRed, bright, colorize, hidden } from '../src/main';

const builder = colorize({ after: ' ' });

const tests = [
    builder
        .magenta('Hi!, i am')
        .unBg()
        .bold()
        .blink()
        .black(' Mauricio Roberto')
        .unBoldBright()
        .unBlink()
        .green(`Ju${bright('nior')} Dev${bgRed('lop')}er`)
        .white('from')
        .yellow('Brazil')
        .cyan()
        .dim(`and my favorite ${hidden('color')} is`)
        .bgGreen()
        .bold()
        .red(' Blue'),
];

tests.forEach((test) => {
    console.log(test.toString());
});
