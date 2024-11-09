import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'], // Generates both CommonJS and ESM
    dts: true,               // Generates TypeScript declaration files
    outDir: 'dist',
    splitting: false,
    sourcemap: true,
    clean: true,
    platform: 'node'
});
