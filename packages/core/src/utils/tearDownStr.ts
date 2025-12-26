import { isNull, isUndefined } from 'a-type-of-js';
import { terminalRegExp } from '@color-pen/static';
import { kindList } from './kindList';
import { reverseParse } from './reverseParse';

/**
 *
 * 拆解字符串
 *
 */
export function tearDownStr(str: string): string[] {
  const endANSI = '\x1b[m';
  str = str.replace(new RegExp('\\\x1b\\[0m', 'g'), endANSI);

  /**  构建正则匹配字符串  */
  const regexpStr = terminalRegExp();
  /**  结果串  */
  const result: string[] = [''];
  /**  匹配到的字符串  */
  let arr: RegExpExecArray | null;
  /**  分隔符  */
  const separator = '%c';
  /**  上一次匹配到的下标，用于截断字符串  */
  let lastIndex = 0;

  /**  上一次匹配到的类型  */
  let lastStyle = '';
  const addItem = () => {
    // 截取到上一段的匹配段
    const newStr = str.substring(lastIndex, arr?.index ?? str.length);
    result[0] += separator.concat(newStr); // 追加文本
    result.push(lastStyle); // 追加样式
  };
  while (!isNull((arr = regexpStr.exec(str)))) {
    addItem();
    // 新样式设置
    lastStyle = isUndefined(arr[7])
      ? new ResultItem(arr[3].slice(0, -1)).str
      : '';
    // 从新给值，让其能够截取到上一段匹配
    lastIndex = regexpStr.lastIndex;
  }
  // 最后仍未匹配上的末尾字符串
  addItem();

  return result;
}

/**  构建结果子项  */
export class ResultItem {
  /**  构建方式  */
  constructor(str: string) {
    this.parse(str); // 解析数据
    this.build();
  }
  /**
   * 构建样式
   */
  build() {
    if (this.hide) {
      /**  构建文本色  */
      this.color = 'transparent';
    }

    if (this.reversed) {
      [this.color, this.bgColor] = [this.bgColor, this.color];
    }

    if (!isUndefined(this.color)) {
      this.str += `color: ${this.color};`;
    }
    if (!isUndefined(this.bgColor)) {
      this.str += `background:  ${this.bgColor};`;
    }
    if (this.bold !== 0) {
      this.str += `font-weight: ${this.bold === 1 ? 800 : 200};`;
    }
    if (this.italic) {
      this.str += `font-style: italic;`;
    }
    if (this.underline) {
      this.str += `border-bottom: 1px #666 solid;`;
    }
  }

  /**  文本色  */
  color: string | undefined = undefined;
  /**  背景色  */
  bgColor: string | undefined = undefined;
  /**  文本是否为粗体  */
  bold: -1 | 0 | 1 = 0;
  /**  斜体  */
  italic: boolean = false;
  /**  下划线  */
  underline: boolean = false;
  /**  反转  */
  reversed: boolean = false;
  /**  隐藏文本  */
  hide: boolean = false;
  /**  文本自身  */
  str: string = '';

  /**  解析数据  */
  parse(str: string) {
    str
      // 替换掉色值
      .replace(/38;5;(\d+)/g, 'c-$1')
      // 替换掉背景色值
      .replace(/48;5;(\d+)/g, 'b-$1')
      // 以 ; 分割色值
      .split(';')
      //
      .reverse()
      .forEach(e => {
        // 文本加粗
        if (this.bold === 0 && e === kindList.bold) {
          this.bold = 1;
        }
        // 细文本
        else if (this.bold === 0 && e === kindList.dim) {
          this.bold = -1;
        }
        // 斜体
        else if (e === kindList.italic) {
          this.italic = true;
        }
        // 下划线
        else if (e === kindList.underline) {
          this.underline = true;
        }
        // 色值反转
        else if (e === kindList.reversed) {
          this.reversed = true;
        }
        // 隐藏文本
        else if (e === kindList.hide) {
          this.hide = true;
        }
        // 前景色
        else if (isUndefined(this.color) && e.startsWith('c')) {
          this.color = reverseParse(e.split('-')[1]);
        } else if (isUndefined(this.bgColor) && e.startsWith('b')) {
          this.bgColor = reverseParse(e.split('-')[1]);
        }
      });
  }
}
