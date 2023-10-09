import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      exclude: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx']
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'classnames'],
      output: {
        globals: {
          react: 'React',
          classnames: 'classNames',
          'react/jsx-runtime': 'JSX'
        },
        preserveModules: true,
        preserveModulesRoot: 'src',
        assetFileNames: '[name][extname]',
        entryFileNames: '[name].js'
      },
      plugins: [preserveDirectives()]
    },
    copyPublicDir: false
  }
});
