import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
// import terser from '@rollup/plugin-terser';
// import cleanup from 'rollup-plugin-cleanup';
import copy from 'rollup-plugin-copy';
import { external } from '@qqi/rollup-external';

export default {
  input: {
    index: './src/index.ts', // 默认：聚合导出入口
  },
  output: ['es', 'cjs'].map(e => ({
    format: e, // ESM 模式
    entryFileNames: '[name].js', // 打包文件名
    preserveModules: true, // 保留独立模块结构（关键）
    preserveModulesRoot: 'src', // 保持 src 目录结构
    sourcemap: false, // 正式环境：关闭 source map
    exports: 'named', // 导出模式
    dir: `dist/${e}/`,
  })),
  // 配置需要排除的包
  external: external(),
  plugins: [
    resolve(),
    commonjs(),
    // 可打包 json 内容
    json(),
    typescript({
      tsconfig: './tsconfig.rollup.json',
    }),
    // terser(), // 压缩
    // cleanup(), // 去除不需要的内容
    copy({
      targets: [
        { src: 'README.md', dest: 'dist' },
        { src: 'LICENSE', dest: 'dist' },
      ],
    }),
  ],
};
