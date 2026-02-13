const esbuild = require('esbuild');

async function build() {
    try {
        console.log('Starting build...');
        await esbuild.build({
            entryPoints: ['src/index.ts'],
            bundle: true,
            platform: 'node',
            outfile: 'dist/index.js',
            format: 'cjs',
            external: ['vite', '@babel/parser', '@babel/types', '@babel/traverse', '@babel/generator', 'launch-editor', 'path', 'child_process']
        });
        console.log('Built CJS to dist/index.js');

        await esbuild.build({
            entryPoints: ['src/index.ts'],
            bundle: true,
            platform: 'node',
            outfile: 'dist/index.mjs',
            format: 'esm',
            external: ['vite', '@babel/parser', '@babel/types', '@babel/traverse', '@babel/generator', 'launch-editor', 'path', 'child_process']
        });
        console.log('Built ESM to dist/index.mjs');
    } catch (e) {
        console.error('Build failed:', e);
        process.exit(1);
    }
}

build();
