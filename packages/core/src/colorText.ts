import { isNode } from 'a-js-tools';
import { tearDownStr } from './utils/tearDownStr';

/**
 *
 * 彩色文本，嗯。。。单独拿出来呢，是想着兼容下 browser
 *
 * @param str 一个由 pen 创建的带样式文本
 * @returns 返回了一个字符串数组
 *
 * @example
 *
 * ```ts
 * import { colorText , pen, redPen } from 'color-pen';
 *
 * const tex = colorText(pen.red`红色的文本`.concat('没有样式的文本'))
 *
 * console.log(tex);
 *
 * console.log(colorText('没有样式的文本'.concat(redPen`红的字`)));
 *
 * ```
 */
export function colorText(str: string): string[] {
  return isNode() ? [str] : tearDownStr(str);
}
