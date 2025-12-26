import { isTrue } from 'a-type-of-js';

/**
 *
 * 将新样式文本追加到样式文本数组中
 *
 * @param kinds 样式文本数组
 * @param kindValue 准备附加的样式文本
 * @returns 样式文本数组已追加到新样式文本
 *
 */
export function mergeValueIsString(kinds: string[], kindValue: string) {
  /**  当前值的数值部分  */
  const currentKindNumber = parseInt(kindValue);
  /**  值大于 10 时，为色值配置  */
  if (currentKindNumber > 10) {
    const startWith = isTrue(38 === currentKindNumber) ? '38;5;' : '48;5;';
    /**  判断是否已设置前景色  */
    const lastExistKindIndex = kinds.findIndex(item =>
      item.startsWith(startWith),
    );
    if (lastExistKindIndex > -1) {
      /**  当前景色已存在时替换  */
      return kinds.toSpliced(lastExistKindIndex, 1, kindValue);
    } else {
      /**  追加色值设置  */
      return [...kinds, kindValue];
    }
  } else {
    /**  值小于 10 时，为非色值样式配置  */
    return kinds.includes(kindValue) ? [...kinds] : [...kinds, kindValue];
  }
}
