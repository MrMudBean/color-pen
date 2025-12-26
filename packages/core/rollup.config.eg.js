import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: './eg/index.ts',
  output: [
    {
      format: 'es',
      entryFileNames: 'index.mjs',
      preserveModules: false,
      sourcemap: false,
      exports: 'named',
      dir: '.eg/',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    // 可打包 json 内容
    json(),
    typescript({
      tsconfig: './tsconfig.rollup.json',
    }),
  ],
};
