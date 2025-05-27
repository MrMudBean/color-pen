import {
  pathJoin,
  readFileToJsonSync,
  getDirectoryBy,
  writeJsonFile,
} from 'a-node-tools';

let packageJson = readFileToJsonSync('./package.json');

['scripts', 'devDependencies', 'lint-staged', 'private'].forEach(
  key => delete packageJson[key],
);

packageJson = {
  ...packageJson,
  main: 'index.cjs',
  types: 'index.d.ts',
  module: 'index.mjs',
  files: ['index.mjs', 'index.cjs', 'index.d.ts', 'src'],
  exports: {
    '.': {
      import: {
        default: './index.mjs',
        types: './index.d.ts',
      },
      require: {
        default: './index.cjs',
        types: './index.d.ts',
      },
    },
  },
  keywords: ['@color-pen/static', '彩色笔'],
  homepage: 'https://earthnut.dev/color-pen/static',
  bugs: {
    url: 'https://github.com/earthnutDev/color-pen/issues',
    email: 'earthnut.dev@outlook.com',
  },
  repository: {
    type: 'git',
    url: 'git+https://github.com/earthnutDev/color-pen.git',
  },
  publishConfig: {
    access: 'public',
    registry: 'https://registry.npmjs.org/',
  },
  author: {
    name: 'earthnut',
    email: 'earthnut.dev@outlook.com',
    url: 'https://earthnut.dev',
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
  const distPath = getDirectoryBy('dist', 'directory');

  const distPackagePath = pathJoin(distPath, './dist/package.json');

  writeJsonFile(distPackagePath, packageJson);
}
