import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: './src/main.ts',
            name: 'Colorize',
            fileName: 'colorize',
        },
    },
    plugins: [dts({ insertTypesEntry: true })],
});
