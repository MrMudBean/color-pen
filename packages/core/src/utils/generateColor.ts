import { isNumber, isString, isUndefined } from 'a-type-of-js';
import { computedTerminalColor } from './computedTerminalColor';

/**
 *
 * 构建 color 色值
 *
 */
export function generateColor(
  color: string | number,
  g?: number,
  b?: number,
  foreground: boolean = true,
): string {
  const colorValue = foreground ? '38' : '48';

  // 三个数皆为数值时判定为 rgb 模式
  if (isNumber(color) && isNumber(g) && isNumber(b)) {
    return `${colorValue};5;${computedTerminalColor([color, g, b], false)}`;
  }
  // 仅传入了字符串
  else if (isString(color) && isUndefined(g) && isUndefined(b)) {
    // 字符串以 rgb 开头时判定为 rgb 模式
    if (color.startsWith('rgb')) {
      return `${colorValue};5;${computedTerminalColor(color, false)}`;
    }
    // 16 进制
    else if (color.startsWith('#') || color.startsWith('0x')) {
      return `${colorValue};5;${computedTerminalColor(color, true)}`;
    } else {
      throwTypeError();
    }
  }
  // 单数值模式则是 hex 模式
  else if (isNumber(color) && isUndefined(g) && isUndefined(b)) {
    return `${colorValue};5;${computedTerminalColor(color, true)}`;
  } else {
    throwTypeError();
  }
}

/**  抛出 typeError  */
function throwTypeError(): never {
  throw new TypeError(
    ' 使用 color() 或 bgColor() 时，可使用三整数 `r , g , b` 或单字符串 `"rgb(r , g, b)"` 或十六进制数值 `0xrgb`、`0xrrggbb` 或十六进制字符串表达 `"#rgb"`、`"#rrggbb"` ，不接受其他格式的参数',
  );
}
