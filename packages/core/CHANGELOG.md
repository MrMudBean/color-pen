# 更新日志

## v3.0.0 (2025-12-26)

- 修改了部分逻辑

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

现在大概率就我一个人在使用该 npm 包，但是*保不起*有别人用呢，所以，进行大版本迭代，防止出现版本更新事故
