import { csi } from '@color-pen/static';
import { beforeBuild } from './beforeBuild';
import { isEmptyArray, isEmptyString, isNull, isUndefined } from 'a-type-of-js';
import { penText } from '../types';

/**
 *
 * 构建最终文本
 *
 * @param str
 * @param kinds
 * @returns 返回一个字符串
 *
 */
export function buildResultStr(str: penText, kinds: string[]): string {
  str = isNull(str) || isUndefined(str) ? '' : str.toString();

  if (isEmptyString(str)) {
    return '';
  }

  if (isEmptyArray(kinds)) {
    return str;
  }
  const hasColorStart = str.indexOf(csi);
  const hasColorEnd = str.indexOf(`${csi}0m`);

  kinds = beforeBuild(kinds);

  if (hasColorStart > -1 && hasColorEnd > -1) {
    return buildResultStr(str.substring(0, hasColorStart), kinds)
      .concat(str.substring(hasColorStart, hasColorEnd + 4))
      .concat(buildResultStr(str.substring(hasColorEnd + 4), kinds));
  }

  if (str.endsWith('\r\n')) {
    str = str.substring(0, str.length - 2);
    return `${csi}${kinds.join(';')}m${str}${csi}0m\r\n`;
  } else if (str.endsWith('\n')) {
    str = str.substring(0, str.length - 1);
    return `${csi}${kinds.join(';')}m${str}${csi}0m\n`;
  } else {
    return `${csi}${kinds.join(';')}m${str}${csi}0m`;
  }
}
