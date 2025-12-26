import { getRandomInt } from 'a-js-tools';

/**
 *
 * 色值对象表
 *
 * 该色值以Terminal.app 为准
 *
 */
const colorList = [
  '#000000',
  '#c23621',
  '#25bc24',
  '#adad29',
  '#492ee1',
  '#dd38dd',
  '#33bbc8',
  '#cbcccd',
  '#818383',
  '#fc391f',
  '#31e722',
  '#eaec23',
  '#5833ff',
  '#f93578',
  '#14f0f0',
  '#ebeded',
];
/**
 *
 * 反向解析色值
 *
 */
export function reverseParse(str: string): string {
  /**  取出色值  */
  let ansiColor = Number(str);

  if (!isFinite(ansiColor)) {
    throw new TypeError('色值反向解析出错');
  }

  if (ansiColor < 16) {
    const result = colorList[ansiColor];
    return result;
  }

  /**  转化为色值  */
  const getColor = (v: number): string =>
    Math.floor((v * 256) / 6 + getRandomInt(42))
      .toString(16)
      .padStart(2, '0');

  ansiColor -= 16;

  const r = getColor(Math.floor(ansiColor / 36));
  const gb = ansiColor % 36;
  const g = getColor(Math.floor(gb / 6));
  const b = getColor(gb % 6);

  return `#${r}${g}${b}`;
}
