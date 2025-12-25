import {
  pathJoin,
  readFileToJsonSync,
  getDirectoryBy,
  writeJsonFile,
  fileExist,
} from 'a-node-tools';
import { readdirSync } from 'node:fs';
import { basename, extname } from 'node:path';

// 原始 package.json 内容
let packageJson = readFileToJsonSync('./package.json');
// 移除冗余的键
['scripts', 'devDependencies', 'lint-staged', 'private'].forEach(
  key => delete packageJson[key],
);
const esPrefix = 'es'; // es 前缀
const cjsPrefix = 'cjs'; // cjs 前缀
const dtsPrefix = 'es'; // 类型文件的前缀
// 查看当前打包 dist 文件路径
const distParentPath = getDirectoryBy('dist', 'directory');
// 查看当前的源码文件路径（原则上与上面值一致）
const srcParentDirectory = getDirectoryBy('src', 'directory');
// 当前 src 的路径
const srcDirectory = pathJoin(srcParentDirectory, 'src');
// src 目录下的文件列表
const srcChildrenList = readdirSync(srcDirectory);
// 打包的 exports
const exportsList = {};

for (const childrenName of srcChildrenList) {
  // 如果是测试文件则跳过
  if (
    // 剔除测试文件
    childrenName.endsWith('.test.ts') ||
    // 剔除根文件
    childrenName.endsWith('index.ts') ||
    // 剔除非导出模块
    ['testData.ts', 'types.ts'].includes(childrenName)
  )
    continue;
  // 文件名（不带后缀）
  const childrenBaseName = basename(childrenName, extname(childrenName));
  // 子文件/夹的路径
  const childPath = pathJoin(srcDirectory, childrenName);

  const childFile = fileExist(childPath); // 文件元数据
  if (!childFile) throw new RangeError(`${childrenName} 文件未能读取`);
  // 子文件是文件夹时以 index.xxx.js 为准
  if (childFile.isDirectory()) {
    exportsList[`./${childrenBaseName}`] = {
      default: `./${esPrefix}/${childrenName}/index.js`,
      import: `./${esPrefix}/${childrenName}/index.js`,
      require: `./${cjsPrefix}/${childrenName}/index.js`,
      types: `./${dtsPrefix}/src/${childrenName}/index.d.ts`,
    };
  } else if (childFile.isFile()) {
    exportsList[`./${childrenBaseName}`] = {
      default: `./${esPrefix}/${childrenBaseName}.js`,
      import: `./${esPrefix}/${childrenBaseName}.js`,
      require: `./${cjsPrefix}/${childrenBaseName}.js`,
      types: `./${dtsPrefix}/src/${childrenBaseName}.d.ts`,
    };
  } else {
    throw new Range(`${childrenName} 文件类型不符合要求`);
  }
}

packageJson = {
  ...packageJson,
  main: cjsPrefix + '/index.js', // 旧版 CommonJs 入口
  types: dtsPrefix + '/src/index.d.ts', // 旧版本类型入口
  module: esPrefix + '/index.js', // 旧版本 ESM 入口
  files: [esPrefix, cjsPrefix, 'LICENSE', 'README.md'],
  author: {
    name: '泥豆君',
    email: 'Mr.MudBean@outlook.com',
    url: 'https://earthnut.dev',
  },
  description: '一点点 🤏 color-pen 的静态数据',
  exports: {
    '.': {
      import: `./${esPrefix}/index.js`,
      default: `./${esPrefix}/index.js`,
      require: `./${cjsPrefix}/index.js`,
      types: `./${dtsPrefix}/src/index.d.ts`,
    },
    ...exportsList,
  },
  keywords: [
    '@color-pen/static',
    '彩色笔',
    'color-pen',
    'Mr.MudBean',
    '终端彩绘',
  ],
  homepage: 'https://earthnut.dev/npm/color-pen/static',
  bugs: {
    url: 'https://github.com/MrMudBean/color-pen/issues',
    email: 'Mr.MudBean@outlook.com',
  },
  repository: {
    type: 'git',
    url: 'git+https://github.com/MrMudBean/color-pen.git',
    directory: 'packages/static/value',
  },
  publishConfig: {
    access: 'public',
    registry: 'https://registry.npmjs.org/',
  },
  browserslist: [
    'last 2 Chrome versions',
    'last 2 Edge versions',
    'not Safari >= 0',
    'not IE >= 0',
    'not Firefox >= 0',
  ],
  engines: {
    node: '>=12.0.0',
  },
};

{
  // 整理打包后 package.json 文件路径
  const distPackagePath = pathJoin(distParentPath, 'dist/package.json');
  // 写入新的 packages.json 文件
  writeJsonFile(distPackagePath, packageJson);
}
