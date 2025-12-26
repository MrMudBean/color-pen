import { getRandomInt } from 'a-js-tools';
import { isArray, isFalse, isNumber, isString, isTrue } from 'a-type-of-js';

/**
 *
 * 计算 256 色值
 *
 *
 * @param color 色值
 * @returns 256 色值
 * @description
 *
 * - 'color' 是 'string' 类型：
 * - - 可以是以 '#' 开头的十六进制颜色值 （'isHex === true'）
 * - - 可以是以 '#' 开头的 3 位颜色值 （'isHex === true'）
 * - - 可能是以 'rgb' 开头的 RGB 颜色值 （'isHex === false'）
 * - 'color' 是 'number' 类型：
 * - - 可以是以 '0x' 开头的十六进制颜色值 （'isHex === true'）
 * - 'color' 是 'number[]' 类型：
 * - - 可能是 RGB 颜色值 '[r， g， b]' （'isHex === false'）
 *
 *
 */
export function computedTerminalColor(
  color: string | number | number[],
  isHex: boolean = true,
): number {
  if (isTrue(isHex)) {
    /// color 为 string
    if (isString(color)) {
      if (color.startsWith('0x')) {
        color = color.replace(/0x/, '#');
      } else if (!color.startsWith('#')) {
        throw new TypeError(
          '`color` must be a string or number but not number[] when isHex is true',
        );
      }
    } else {
      throw new TypeError(
        '`color` must be a string or number but not number[] when isHex is true',
      );
    }
  } else if (isFalse(isHex)) {
    if (isArray(color)) {
      if (color.some(item => !isFinite(item)) || color.length !== 3) {
        throw new TypeError(
          'If the `color` is an array, it must be 3 in length and be of numeric type',
        );
      }
      // color 为 number[] 时转化为 string
      color = `rgb(${color.join(',')})`;
    } else if (isNumber(color)) {
      /// color 为 number 时禁止
      throw new TypeError('If the `color` is not number when isHex is false');
    } else if (isString(color)) {
      if (!color.startsWith('rgb(') || !color.endsWith(')')) {
        throw new TypeError(
          'If the `color` is a string, it must be rgb(r, g, b)',
        );
      } else {
        const rgb = color.replace(/.*\((.*)\).*/, '$1').split(',');
        if (
          rgb.length !== 3 ||
          rgb.some(
            item =>
              !isFinite(Number(item)) || Number(item) < 0 || Number(item) > 255,
          )
        ) {
          throw new TypeError(
            'If the `color` is a string, it must be rgb(r, g, b)',
          );
        }
      }
    }
  } else {
    throw new TypeError('The second variable `isHex` must be boolean');
  }

  let r = 0,
    g = 0,
    b = 0;

  if (color.startsWith('#')) {
    color = color.slice(1);
    if (color.length == 6) {
      r = getColor(parseInt(color.slice(0, 2), 16));
      g = getColor(parseInt(color.slice(2, 4), 16));
      b = getColor(parseInt(color.slice(4, 6), 16));
    } else if (color.length == 3) {
      r = getColor(parseInt(color.slice(0, 1).repeat(2), 16));
      g = getColor(parseInt(color.slice(1, 2).repeat(2), 16));
      b = getColor(parseInt(color.slice(2, 3).repeat(2), 16));
    } else return getRandomInt(255);
  } else if (color.startsWith('rgb')) {
    const colorArr = color.replace(/.*\((.*)\).*/, '$1').split(',');
    r = getColor(Number(colorArr[0]));
    g = getColor(Number(colorArr[1]));
    b = getColor(Number(colorArr[2]));
  }

  return 16 + 36 * r + 6 * g + b;
}

/**
 *
 * @description 计算颜色值
 * @param value 颜色值
 *
 */
export function getColor(value: number) {
  const result = isFinite(value)
    ? Math.floor((value * 6) / 256)
    : getRandomInt(6);
  return Math.min(5, Math.max(0, result));
}
