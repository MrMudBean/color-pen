import { generateColor } from './generateColor';

/**
 *
 * 构建 rgb 色值
 *
 */
export function generateRgb(
  r: string | number,
  g?: number,
  b?: number,
  foreground: boolean = true,
): string {
  try {
    return generateColor(r, g, b, foreground);
  } catch (error) {
    console.error(error);
    throw new TypeError(
      '使用 rgb() 或 bgRgb() 时，参数可以为单字符串 `"rgb(r, g, b)"` 或三个数值  `r , g ,b`。不接受其他格式',
    );
  }
}
