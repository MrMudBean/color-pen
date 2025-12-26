import { kindList } from './utils/kindList';
import { generatePen } from './pen';
import { Pen } from './types';

/**
 *
 * 使用彩色 🖌️ 在终端上 ✍️ 彩色字
 *
 *
 */
const pen: Pen = new generatePen([]);

/**
 * <span style="color:#b5281d;">带红前景色初始化的笔</span>
 *
 * 16 进制色值：   <span style="color:#b5281d;">#b5281d</span>
 *
 * RGB 色值：    <span style="color:#b5281d;">rgb(181 ,40 ,29)</span>
 *
 */
const redPen: Pen = new generatePen([kindList.red]);

/**
 *
 *
 * <span style="color:#32b520;">带绿前景色初始化的笔</span>
 *
 * 16 进制色值：   <span style="color:#32b520;">#32b520</span>
 *
 * RGB 色值：    <span style="color:#32b520;">rgb(50 ,181 ,32)</span>
 *
 */
const greenPen: Pen = new generatePen([kindList.green]);
/**
 *
 * <span style="color:#a0a01d;">带黄前景色初始化的笔</span>
 *
 * 16 进制色值：   <span style="color:#a0a01d;">#a0a01d</span>
 *
 * RGB 色值：    <span style="color:#a0a01d;">rgb(160 ,160 ,29)</span>
 *
 *
 */
const yellowPen: Pen = new generatePen([kindList.yellow]);
/**
 *
 *
 * <span style="color:#400ad9;">带蓝前景色初始化的笔</span>
 *
 * 16 进制色值：   <span style="color:#400ad9;">#400ad9</span>
 *
 * RGB 色值：    <span style="color:#400ad9;">rgb(64 ,10 ,217)</span>
 *
 */
const bluePen: Pen = new generatePen([kindList.blue]);

/**
 *
 * <span style="color:#c918c9;">带杨红前景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#c918c9;">#c918c9</span>
 *
 * RGB 色值：  <span style="color:#c918c9;">rgb(201 ,24 ,201)</span>
 *
 *
 */
const magentaPen: Pen = new generatePen([kindList.magenta]);

/**
 *
 *
 * <span style="color:#2daebb;">带青前景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#2daebb;">#2daebb</span>
 *
 * RGB 色值：  <span style="color:#2daebb;">rgb(45 ,174 ,187)</span>
 *
 */
const cyanPen: Pen = new generatePen([kindList.cyan]);
/**
 *
 *
 * <span style="color:#c1c1c1;">带白前景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#c1c1c1;">#c1c1c1</span>
 *
 * RGB 色值：  <span style="color:#c1c1c1;">rgb(193 ,193 ,193)</span>
 *
 */
const whitePen: Pen = new generatePen([kindList.white]);

/**
 *
 *
 * <span style="color:#6f6f6f;">带高亮黑前景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#6f6f6f;">#6f6f6f</span>
 *
 * RGB 色值：  <span style="color:#6f6f6f;">rgb(111 ,111 ,111)</span>
 *
 */
const brightBlackPen: Pen = new generatePen([kindList.brightBlack]);
/**
 *
 *
 * <span style="color:#fc2119;">带高亮红前景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#fc2119;">#fc2119</span>
 *
 * RGB 色值：  <span style="color:#fc2119;">rgb(252 ,33 ,25)</span>
 *
 *
 */
const brightRedPen: Pen = new generatePen([kindList.brightRed]);
/**
 *
 * <span style="color:#2fe81a;">带高亮绿前景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#2fe81a;">#2fe81a</span>
 *
 * RGB 色值：  <span style="color:#2fe81a;">rgb(47 ,232 ,26)</span>
 *
 *
 *
 */
const brightGreenPen: Pen = new generatePen([kindList.brightGreen]);
/**
 *
 *
 * <span style="color:#e8ec14;">带高亮黄前景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#e8ec14;">#e8ec14</span>
 *
 * RGB 色值：  <span style="color:#e8ec14;">rgb(232 ,236 ,20)</span>
 *
 */
const brightYellowPen: Pen = new generatePen([kindList.brightYellow]);
/**
 *
 *
 * <span style="color:#4a03fe;">带高亮蓝前景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#4a03fe;">#4a03fe</span>
 *
 * RGB 色值：  <span style="color:#4a03fe;">rgb(74 ,3 ,254)</span>
 *
 *
 */
const brightBluePen: Pen = new generatePen([kindList.brightBlue]);
/**
 *
 *
 * <span style="color:#fb00fa;">带高亮洋红色前景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#fb00fa;">#fb00fa</span>
 *
 * RGB 色值：  <span style="color:#fb00fa;">rgb(251 ,0 ,253)</span>
 *
 *
 */
const brightMagentaPen: Pen = new generatePen([kindList.brightMagenta]);
/**
 *
 *
 * <span style="color:#2ceeec;">带高亮青色前景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#2ceeec;">#2ceeec</span>
 *
 * RGB 色值：  <span style="color:#2ceeec;">rgb(44 ,238 ,236)</span>
 *
 */
const brightCyanPen: Pen = new generatePen([kindList.brightCyan]);
/**
 *
 *
 * <span style="color:#ffffff;">带高亮白色前景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#ffffff;">#ffffff</span>
 *
 * RGB 色值：  <span style="color:#ffffff;">rgb(255 ,255 ,255)</span>
 *
 */
const brightWhitePen: Pen = new generatePen([kindList.brightWhite]);
/**
 *
 * <span style="color:#565656;">带黑背景色初始化的笔</span>
 *
 * 16 进制色值：   <span style="color:#565656;">#565656</span>
 *
 * RGB 色值：    <span style="color:#565656;">rgb(86 ,86 ,86)</span>
 */
const bgBlackPen: Pen = new generatePen([kindList.bgBlack]);
/**
 * <span style="color:#b5281d;">带红背景色初始化的笔</span>
 *
 * 16 进制色值：   <span style="color:#b5281d;">#b5281d</span>
 *
 * RGB 色值：    <span style="color:#b5281d;">rgb(181 ,40 ,29)</span>
 *
 */
const bgRedPen: Pen = new generatePen([kindList.bgRed]);
/**
 *
 *
 * <span style="color:#32b520;">带绿背景色初始化的笔</span>
 *
 * 16 进制色值：   <span style="color:#32b520;">#32b520</span>
 *
 * RGB 色值：    <span style="color:#32b520;">rgb(50 ,181 ,32)</span>
 *
 */
const bgGreenPen: Pen = new generatePen([kindList.bgGreen]);
/**
 *
 * <span style="color:#a0a01d;">带黄背景色初始化的笔</span>
 *
 * 16 进制色值：   <span style="color:#a0a01d;">#a0a01d</span>
 *
 * RGB 色值：    <span style="color:#a0a01d;">rgb(160 ,160 ,29)</span>
 *
 *
 */
const bgYellowPen: Pen = new generatePen([kindList.bgYellow]);
/**
 *
 *
 * <span style="color:#400ad9;">带蓝背景色初始化的笔</span>
 *
 * 16 进制色值：   <span style="color:#400ad9;">#400ad9</span>
 *
 * RGB 色值：    <span style="color:#400ad9;">rgb(64 ,10 ,217)</span>
 *
 */
const bgBluePen: Pen = new generatePen([kindList.bgBlue]);
/**
 *
 * <span style="color:#c918c9;">带杨红背景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#c918c9;">#c918c9</span>
 *
 * RGB 色值：  <span style="color:#c918c9;">rgb(201 ,24 ,201)</span>
 *
 *
 */
const bgMagentaPen: Pen = new generatePen([kindList.bgMagenta]);
/**
 *
 *
 * <span style="color:#2daebb;">带青色背景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#2daebb;">#2daebb</span>
 *
 * RGB 色值：  <span style="color:#2daebb;">rgb(45 ,174 ,187)</span>
 *
 */
const bgCyanPen: Pen = new generatePen([kindList.bgCyan]);
/**
 *
 *
 * <span style="color:#c1c1c1;">带白色背景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#c1c1c1;">#c1c1c1</span>
 *
 * RGB 色值：  <span style="color:#c1c1c1;">rgb(193 ,193 ,193)</span>
 *
 */
const bgWhitePen: Pen = new generatePen([kindList.bgWhite]);
/**
 *
 *
 * <span style="color:#6f6f6f;">带亮黑色背景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#6f6f6f;">#6f6f6f</span>
 *
 * RGB 色值：  <span style="color:#6f6f6f;">rgb(111 ,111 ,111)</span>
 *
 */
const bgBrightBlackPen: Pen = new generatePen([kindList.bgBrightBlack]);
/**
 *
 *
 * <span style="color:#fc2119;">带亮红色背景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#fc2119;">#fc2119</span>
 *
 * RGB 色值：  <span style="color:#fc2119;">rgb(252 ,33 ,25)</span>
 *
 *
 */
const bgBrightRedPen: Pen = new generatePen([kindList.bgBrightRed]);
/**
 *
 * <span style="color:#2fe81a;">带亮绿色背景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#2fe81a;">#2fe81a</span>
 *
 * RGB 色值：  <span style="color:#2fe81a;">rgb(47 ,232 ,26)</span>
 *
 *
 *
 */
const bgBrightGreenPen: Pen = new generatePen([kindList.bgBrightGreen]);
/**
 *
 *
 * <span style="color:#e8ec14;">带亮黄色背景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#e8ec14;">#e8ec14</span>
 *
 * RGB 色值：  <span style="color:#e8ec14;">rgb(232 ,236 ,20)</span>
 *
 */
const bgBrightYellowPen: Pen = new generatePen([kindList.bgBrightYellow]);
/**
 *
 *
 * <span style="color:#4a03fe;">带亮蓝色背景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#4a03fe;">#4a03fe</span>
 *
 * RGB 色值：  <span style="color:#4a03fe;">rgb(74 ,3 ,254)</span>
 *
 *
 */

const bgBrightBluePen: Pen = new generatePen([kindList.bgBrightBlue]);
/**
 *
 *
 * <span style="color:#fb00fa;">带亮杨红色背景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#fb00fa;">#fb00fa</span>
 *
 * RGB 色值：  <span style="color:#fb00fa;">rgb(251 ,0 ,253)</span>
 *
 *
 */
const bgBrightMagentaPen: Pen = new generatePen([kindList.bgBrightMagenta]);
/**
 *
 *
 * <span style="color:#2ceeec;">带亮青色背景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#2ceeec;">#2ceeec</span>
 *
 * RGB 色值：  <span style="color:#2ceeec;">rgb(44 ,238 ,236)</span>
 *
 */
const bgBrightCyanPen: Pen = new generatePen([kindList.bgBrightCyan]);
/**
 *
 *
 * <span style="color:#ffffff;">带亮白色背景色初始化的笔</span>
 *
 * 16 进制色值： <span style="color:#ffffff;">#ffffff</span>
 *
 * RGB 色值：  <span style="color:#ffffff;">rgb(255 ,255 ,255)</span>
 *
 */
const bgBrightWhitePen: Pen = new generatePen([kindList.bgBrightWhite]);
/**
 *
 * 带加粗初始化的笔
 *
 */
const boldPen: Pen = new generatePen([kindList.bold]);
/**
 *
 * 带斜体初始化的笔
 *
 */
const italicPen: Pen = new generatePen([kindList.italic]);
/**
 *
 *  带下划线初始化的笔
 *
 */
const underlinePen: Pen = new generatePen([kindList.underline]);
/**
 *
 * 不显示文本的笔
 *
 */
const hidePen: Pen = new generatePen([kindList.hide]);

/**  一个细一点的 笔  */
const dimPen: Pen = new generatePen([kindList.dim]);

/**  一个闪烁的笔  */
const blinkPen: Pen = new generatePen([kindList.blink]);

/**  一个反转的笔  */
const reversedPen: Pen = new generatePen([kindList.reversed]);
/**
 *
 * ###  使用 RGB 设置背景色
 *
 * @param r 构建的 RGB 颜色的 r 值或 RGB 文本值
 * - `r`  为 `string` 时，为 `rgb(r ,g ,b)` 格式，且第二参数和第三参数应为 `undefined`
 * - `r` 为 `number` 时，搭配 `g` 和 `b` 构建三色
 * @param g 当第一参数为 string 时，该值应为 `undefined`；第一参数为数值时，该值表示 `g` 值
 * @param b 当第一参数为 string 时，该值应为 `undefined`；第一参数为数值时，该值表示 `b` 值
 * @returns 返回 ANSI 颜色文本
 * @example
 * ```ts
 * import { pen } from 'color-pen';
 *
 * const redPen = pen.bgRgb(255, 0, 0); // 构建红色背景
 * const bluePen = pen.bgRgb('rgb(0, 0, 255)'); // 构建蓝色背景
 *
 * // 第二参数在第一参数为字符串时不为 undefined 将抛出 `TypeError`
 * pen.bgRgb('rgb(0, 0, 255)', 1);
 * // 三个参数中有值超出范围则会抛出 `TypeError`
 * pen.bgRgb(1,2, 256); // => TypeError
 * pen.bgRgb('rgb(0, 0, 258)');  // => TypeError
 * pen.bgRgb(-100,2, 125);  // => TypeError
 * pen.bgRgb('rgb(-100, 0, 258)');  // => TypeError
 * // 三个参数中有浮点数则抛出 `TypeError`
 * pen.bgRgb('rgb(0, 0 ,125.5)'); // => TypeError
 *
 * ```
 */
const rgbPen = pen.rgb;

/**
 *   使用 16 进制设置前景色
 * @param hex 构建使用 16 进制色值 `0x000000`、`#000000`
 * @returns  返回构建的 ANSI 转义 色值
 */
const hexPen = pen.hex;

/**
 *  使用 RGB 或 hex 设置前景色
 *
 *
 *
 * @param rgbOrHex  构建的 rgb 或 hex 文本色值
 * @param r 构建色值的红色部分
 * @param g 构建色值的绿色部分
 * @param b 构建色值的蓝色部分
 * @returns 构建的 ANSI 转义色值
 *
 */
const colorPen = pen.color;
/**
 *
 * ###  使用 RGB 设置背景色
 *
 * @param rgb 构建的 RGB 颜色的 RGB 文本值
 * @returns 返回 ANSI 颜色文本
 * @example
 * ```ts
 * import { pen } from 'color-pen';
 *
 * const redPen = pen.bgRgb(255, 0, 0); // 构建红色背景
 * const bluePen = pen.bgRgb('rgb(0, 0, 255)'); // 构建蓝色背景
 *
 * // 第二参数在第一参数为字符串时不为 undefined 将抛出 `TypeError`
 * pen.bgRgb('rgb(0, 0, 255)', 1);
 * // 三个参数中有值超出范围则会抛出 `TypeError`
 * pen.bgRgb(1,2, 256); // => TypeError
 * pen.bgRgb('rgb(0, 0, 258)');  // => TypeError
 * pen.bgRgb(-100,2, 125);  // => TypeError
 * pen.bgRgb('rgb(-100, 0, 258)');  // => TypeError
 * // 三个参数中有浮点数则抛出 `TypeError`
 * pen.bgRgb('rgb(0, 0 ,125.5)'); // => TypeError
 *
 * ```
 */
const bgRgbPen = pen.bgRgb;
/**
 *   使用 16 进制设置背景色
 *
 * @param hex  构建色值中的 16 进制色值 `0xffffff` 或 `#ffffff` 格式
 * @returns 构建的 ANSI 转义色值
 *
 */
const bgHexPen = pen.bgHex;
/**
 * 使用 RGB 或 hex 设置背景色
 *
 * @param rgbOrHex 构建的 rgb 或是 hex 色值
 * @returns 返回的 ANSI 转义色值
 *
 */
const bgColorPen = pen.bgColor;
/**  随机前景色  */
const randomPen = pen.random;
/**  随机背景色  */
const bgRandomPen = pen.bgRandom;
/**
 *  ## 直接使用数值指定终端前景色颜色
 *
 * 后期有时间会出一个数值与色值的对照表
 *
 * @param n 终端颜色值，取值范围 `0 - 255`
 * @returns 返回 ANSI 颜色文本
 * @example
 *
 * ```ts
 * import { pen } from 'color-pen';
 *
 * pen.number(0)`黑色文本`;
 * pen.number(1)`红色文本`;
 * pen.number(2)`绿色文本`;
 * pen.number(3)`黄色文本`;
 * pen.number(4)`蓝草绿色文本`;
 * pen.number(5)`杨红色文本`;
 * pen.number(6)`青色文本`;
 * pen.number(7)`白色文本`;
 * pen.number(8)`亮黑色文本`;
 * pen.number(9)`亮红色文本`;
 * pen.number(10)`亮绿色文本`;
 * pen.number(11)`亮黄色文本`;
 * pen.number(12)`亮蓝草绿色文本`;
 * pen.number(13)`亮杨红色文本`;
 * pen.number(14)`亮青色文本`;
 * pen.number(15)`亮白色文本`;
 * // 数值再高就涉及到计算了。后期将计算公式贴出
 *
 * ```
 */
const numberPen = pen.number;
/**
 *  ## 直接使用数值指定终端背景色颜色
 *
 * 后期有时间会出一个数值与色值的对照表
 *
 * @param n 终端颜色值，取值范围 `0 - 255`
 * @returns 返回 ANSI 颜色文本
 * @example
 *
 * ```ts
 * import { pen } from 'color-pen';
 *
 * pen.number(0)`黑色背景`;
 * pen.number(1)`红色背景`;
 * pen.number(2)`绿色背景`;
 * pen.number(3)`黄色背景`;
 * pen.number(4)`蓝草绿色背景`;
 * pen.number(5)`杨红色背景`;
 * pen.number(6)`青色背景`;
 * pen.number(7)`白色背景`;
 * pen.number(8)`亮黑色背景`;
 * pen.number(9)`亮红色背景`;
 * pen.number(10)`亮绿色背景`;
 * pen.number(11)`亮黄色背景`;
 * pen.number(12)`亮蓝草绿色背景`;
 * pen.number(13)`亮杨红色背景`;
 * pen.number(14)`亮青色背景`;
 * pen.number(15)`亮白色背景`;
 * // 数值再高就涉及到计算了。后期将计算公式贴出
 *
 * ```
 */
const bgNumberPen = pen.bgNumber;

export {
  pen,
  redPen,
  greenPen,
  yellowPen,
  bluePen,
  magentaPen,
  cyanPen,
  whitePen,
  brightBlackPen,
  brightRedPen,
  brightGreenPen,
  brightYellowPen,
  brightBluePen,
  brightMagentaPen,
  brightCyanPen,
  brightWhitePen,
  bgBlackPen,
  bgRedPen,
  bgGreenPen,
  bgYellowPen,
  bgBluePen,
  bgMagentaPen,
  bgCyanPen,
  bgWhitePen,
  bgBrightBlackPen,
  bgBrightRedPen,
  bgBrightGreenPen,
  bgBrightYellowPen,
  bgBrightBluePen,
  bgBrightMagentaPen,
  bgBrightCyanPen,
  bgBrightWhitePen,
  boldPen,
  italicPen,
  underlinePen,
  hidePen,
  rgbPen,
  hexPen,
  colorPen,
  bgRgbPen,
  numberPen,
  bgHexPen,
  bgColorPen,
  bgNumberPen,
  randomPen,
  bgRandomPen,
  dimPen,
  blinkPen,
  reversedPen,
};
