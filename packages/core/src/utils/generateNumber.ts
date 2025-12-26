import { getRandomInt } from 'a-js-tools';

/**
 *
 * 使用数值配置色值
 *
 */
export function generateNumber(n: number, forceColor: boolean = false) {
  if (n < 0) {
    n = 0;
  }
  if (n > 255) {
    n = 255;
  }
  if (isFinite(n)) {
    n = Math.round(n);
  } else {
    n = getRandomInt(255);
  }

  return `${[48, 38][Number(forceColor)]};5;${n}`;
}
