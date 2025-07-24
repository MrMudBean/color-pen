# 更新日志

## v2.0.13-test.0 (2025-7-24)

## v2.0.12 (2025-7-18)

- 么事

## v2.0.11 (2025-6-16)

- 么事

## v2.0.10 （5 🈷️ 24 日 2025 年）

- 就是闲的

## v2.0.9 （5 🈷️ 22 日 2025 年）

- 逻辑设计应该很重要吧。 `truncateStringWithChar` 支持自定义是否添加尾随的空格

## v2.0.8 （5 🈷️ 22 日 2025 年）

- 现在 `truncateStringWithChar` 可截取含 ANSI 转义的字符串，且支持从后面截取

## v2.0.7 （5 🈷️ 21 日 2025 年）

- 修复表情在 `truncateStringWithChar` 造成的干扰

## v2.0.6 （5 🈷️ 21 日 2025 年）

- 修改了 `truncateStringWithChar` 的算法逻辑
- 添加了 `cutoffStringWithChar` 作为 `truncateStringWithChar` 的别名（英文不好）

## v2.0.5 （5 🈷️ 17 日 2025 年）

添加了几个笔

- `dimPen` 初始化细体的 🖊️
- `blinkPen` 初始化闪烁的 🖊️
- `reversedPen` 初始化文本色和前景色反转的 🖊️

## v2.0.4 （5 🈷️ 16 日 2025 年）

- 参数可以是任意原始类型，而不再限制于字符类型

## v2.0.3 （5 🈷️ 10 日 2025 年）

- 更新依赖

## v2.0.2 （5 🈷️ 8 日 2025 年）

- 更新版本号玩

## v2.0.1 （5 🈷️ 6 日 2025 年）

- v2 版本移除了 `esc`、`csi`、`terminalResetStyle`、`terminalRegExp` ，现在使用需单独安装 [@color-pen/static](https://www.npmjs.com/package/@color-pen/static)
- 修复了 `kindList.blue` 的注释

### ✨ 添加了

- `redPen` 初始化的红色笔
- `bluePen` 初始化的蓝色 🖊️
- `greenPen` 初始化的绿色 🖊️
- `yellowPen` 初始化的黄色 🖊️
- `magentaPen` 初始化的洋红 🖊️
- `cyanPen` 初始化的青 🖊️
- `whitePen` 初始化的白 🖊️
- `brightBlackPen` 初始化的亮黑 🖊️
- `brightRedPen` 初始化的亮红 🖊️
- `brightGreenPen` 初始化的亮绿 🖊️
- `brightYellowPen` 初始化的亮黄 🖊️
- `brightBluePen` 初始化的亮蓝 🖊️
- `brightMagentaPen` 初始化的亮杨红 🖊️
- `brightCyanPen` 初始化的青 🖊️
- `brightWhitePen` 初始化的亮白 🖊️
- `bgBlackPen` 初始化的黑色背景 🖊️
- `bgRedPen` 初始化的红色背景 🖊️
- `bgGreenPen` 初始化的绿色背景 🖊️
- `bgYellowPen` 初始化的黄色背景 🖊️
- `bgBluePen` 初始化的蓝色背景 🖊️
- `bgMagentaPen` 初始化的杨红色背景 🖊️
- `bgCyanPen` 初始化的青色背景 🖊️
- `bgWhitePen` 初始化的白色背景 🖊️
- `bgBrightBlackPen` 初始化的亮黑色背景 🖊️
- `bgBrightRedPen` 初始化的色亮红背景 🖊️
- `bgBrightGreenPen` 初始化的色亮绿背景 🖊️
- `bgBrightYellowPen` 初始化的色亮黄背景 🖊️
- `bgBrightBluePen` 初始化的亮蓝色背景 🖊️
- `bgBrightMagentaPen` 初始化的亮杨红色背景 🖊️
- `bgBrightCyanPen` 初始化的亮青色背景 🖊️
- `bgBrightWhitePen` 初始化的亮白色背景 🖊️
- `boldPen` 初始化的粗体 🖊️
- `italicPen` 初始化的斜体 🖊️
- `underlinePen` 初始化的带下划线 🖊️
- `hidePen` 初始化的隐藏文本 🖊️
- `rgbPen` 初始化的使用 rgb 创建色值的 🖊️
- `hexPen` 初始化的使用 hex 创建色值的 🖊️
- `colorPen` 初始化的使用 rgb 或 hex 创建色值的 🖊️
- `bgRgbPen` 初始化的使用 rgb 创建背景色的 🖊️
- `bgHexPen` 初始化的使用 hex 创建背景色的 🖊️
- `bgColorPen` 初始化的使用 rgb 或 hex 创建背景色 🖊️
- `randomPen` 初始化的随机文本色的 🖊️
- `bgRandomPen` 初始化的随机背景色的 🖊️
- `numberPen` 初始化的使用 ANSI 转义的 🖊️
- `bgNumberPen` 初始化的使用 ANSI 转义的背景色的 🖊️

## v2.0.0 （5 🈷️ 5 日 2025 年）

- `terminalRegExp` 从 v2 版本及之后的将由正则转化为一个函数，用于正确使用这个带有 `g` 标签的正则。以满足 lastIndex 的正确使用
- ✨ 添加了 `colorText` 函数，可用于创建一个通用的彩色文本用于 node 环境与浏览器环境

\*现在大概率就我一个人在使用该 npm 包，但是保不起有别人用呢，所以，进行大版本迭代，防止出现版本更新事故\*

## v1.3.2 （5 🈷️ 1 日 2025 年）

- 移除了并没有太多使用的 `@qqi/dev-log`

## v1.3.1 （4 🈷️ 28 日 2025 年）

- 尴尬，逻辑写了、日志更新了、README.md 也添加了甚至我最讨厌的测试都写了，忘了再 `index.ts` 导出了，我 XXXX

## v1.3.0 （4 🈷️ 28 日 2025 年）

- ✨ 新增 `strInOneLineOnTerminal` 方法将长字符串输入在终端的一行之内

## v1.2.2 （4 🈷️ 26 日 2025 年）

- 添加测试

## v1.2.1 （4 🈷️ 26 日 2025 年）

- 修复已知 bug 🐛

## v1.2.0 （4 🈷️ 26 日 2025 年）

- ✨ 新增 `truncateStringWithChar` 方法，截取给定字符串的在终端长度

## v1.1.0 （4 🈷️ 24 日 2025 年）

- 添加 `number`、`bgNumber` 两个方法，方便使用指定数值的方法使用色值，该需求在 [a command v3 版本](https://www.npmjs.com/package/a-command/v/3.0.0)

## v1.0.0 （4 🈷️ 23 日 2025 年）

### ⚠️ 不兼容更改

- 原 `t` 没有语义且易于其他第三方库冲突，现改为 `csi`

### ✨ 新增

- 添加 `esc` 描述转义符
- 添加 `terminalResetStyle` 表述重置终端样式（仅字符串）
- 添加 `terminalRegExp` （在 v2 版本及之后的将由正则转化为一个函数，用于正确使用这个带有 `g` 标签的正则。以满足 lastIndex 的正确使用） 正则可用于检验字符串是否包含 ANSI 转义或替代为纯净的字符串以方便统计字符数
- 添加了 `strInTerminalLength` 方法用于获取字符串可在终端显示的长度
- 完善了部分测试
- 现在 pen 支持模版函数式调用，这是不是很酷。哈哈哈哈哈哈哈哈
- 现在仅默认使用 pen 后，将返回随机色（可能不是你想要的，但是我自己觉得好玩 😌 ）

## v1.0.0-next.0 （4 🈷️ 19 日 2025 年）

重构逻辑，创建 `ts` 的构造函数构造 `generatePen`

## v0.2.0 （4 🈷️ 18 日 2025 年）

- 修复了文本末包含 '\n' / '\r\n' 时样式结束符出现在下一行的情况（导致我在 [gvv](https://www.npmjs.com/package/gvv) 中使用时出现了打印多行同质文本的问题）
- 添加了 `pen.color` 和 `pen.bgColor`
- _暂时类型声明和测试有问题，先这样吧。。。。 🐛_

## 0.1.2 (4 月 9 2025 年)

- 文档更新

## 0.1.1 (3 月 29 2025 年)

- 去除了我用翻译翻译的翻译

## 0.1.0 (3 月 25 2025 年)

- 添加了 github actions publish 到 npm ，可以显示一个 `Provenance` 。中国人么，就喜欢折腾没用的
- 替换了原有的中文注释
- 优化了 `README`
- 添加了 `husky`、`lint-staged` 自动在提交代码时执行 `prettier` 和 `eslint`

## 0.0.1 (3 月 21 2025 年)

- 支持颜色外的其他的样式，如粗体、斜体、闪烁、下划线、反色等

## 0.0.0 (3 月 14 2025 年)

- 初始化项目
