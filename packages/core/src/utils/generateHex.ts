import { generateColor } from './generateColor';

/**
 *
 * 构建 hex 色值
 *
 * @param hex - hex 色值
 * @param [foreground=true]  是否为前景色
 * @returns 返回构建后的色值
 */
export function generateHex(
  hex: string | number,
  foreground: boolean = true,
): string {
  try {
    return generateColor(hex, undefined, undefined, foreground);
  } catch (error) {
    console.error(error);
    throw new TypeError(
      '使用 hex() 或 bgHex() 时，参数可以为单字符串 `"0xnnnnnn"`、`"#rgb"` 、`"#rrggbb"` 或一个数值  `0xrrggbb`。不接受其他格式',
    );
  }
}
