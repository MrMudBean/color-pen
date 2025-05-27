import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import cleanup from 'rollup-plugin-cleanup';
import copy from 'rollup-plugin-copy';
import { external } from '@qqi/rollup-external';

export default {
  input: './index.ts',
  output: [
    {
      format: 'es',
      entryFileNames: '[name].mjs',
      preserveModules: true,
      sourcemap: false,
      exports: 'named',
      dir: 'dist/',
    },
    {
      format: 'cjs',
      entryFileNames: '[name].cjs',
      preserveModules: true,
      sourcemap: false,
      exports: 'named',
      dir: 'dist/',
    },
  ],
  external: external({}),
  plugins: [
    resolve(),
    commonjs(),
    json(),
    typescript({
      tsconfig: './tsconfig.rollup.json',
    }),

    cleanup(),
    copy({
      targets: [
        { src: 'README.md', dest: 'dist' },
        { src: 'LICENSE', dest: 'dist' },
      ],
    }),
  ],
};
