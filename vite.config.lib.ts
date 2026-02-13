import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vpcr',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`
    },
    rollupOptions: {
      external: [
        'vite', 
        '@babel/parser', 
        '@babel/types', 
        '@babel/traverse', 
        '@babel/generator', 
        'launch-editor', 
        'path', 
        'child_process'
      ],
    },
    outDir: 'dist',
    emptyOutDir: false, // Don't delete my manual d.ts file!
  }
});
