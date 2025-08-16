import { defineConfig } from 'father';

export default defineConfig({
  esm: { output: 'dist/esm', ignores: ['./src/components/**/*', './src/Editor/**/*'] },
  cjs: { output: 'dist/cjs', ignores: ['./src/components/**/*', './src/Editor/**/*'] },
});
