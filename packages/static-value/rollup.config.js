import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import cleanup from 'rollup-plugin-cleanup';
import copy from 'rollup-plugin-copy';
import { external } from '@qqi/rollup-external';
import terser from '@rollup/plugin-terser';

export default {
  input: './src/index.ts', // 默认：入口文件
  output: [
    {
      format: 'es', // ESM 模式
      entryFileNames: '[name].js', // 打包文件名
      preserveModules: true, // 保留独立的模块结构
      preserveModulesRoot: 'src', // 保持 src 目录结构
      sourcemap: false, // 关闭 sourcemap
      exports: 'named', // 导出模式
      dir: 'dist/es/', // 打包出口
    },
    {
      format: 'cjs', // CommonJs 模式
      entryFileNames: '[name].js', //
      preserveModules: true, // 保留独立的模块结构
      preserveModulesRoot: 'src', // 保持 src 目录结构
      sourcemap: false, // 关闭 sourcemap
      exports: 'named', // 导出模式
      dir: 'dist/cjs/', // 打包出口
    },
  ],
  external: external(),
  plugins: [
    resolve(),
    commonjs(),
    json(),
    typescript({
      tsconfig: './tsconfig.rollup.json',
    }),
    terser(),
    cleanup(),
    copy({
      targets: [
        { src: 'README.md', dest: 'dist' },
        { src: 'LICENSE', dest: 'dist' },
      ],
    }),
  ],
};
