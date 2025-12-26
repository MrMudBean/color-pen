import { createConstructor } from 'a-js-tools';
import { buildResultStr } from './utils/buildResultStr';
import { kindList } from './utils/kindList';
import {
  FunctionKindList,
  KindListKey,
  Pen,
  penText,
  StringKindList,
} from './types';
import {
  isArray,
  isEmptyArray,
  isNumber,
  isString,
  isType,
  isUndefined,
} from 'a-type-of-js';
import { mergeValueIsString } from './utils/mergeValue';

/**
 *
 * 生成 `pen`
 *
 * @param kinds 样式数组
 *
 */
function generatePen(kinds: string[] = []): Pen {
  /**************************
   * 笔盒
   *
   * 用来装置样式
   **************************/
  const penCase = (str: penText | TemplateStringsArray, ...arg: penText[]) => {
    if (
      isType<TemplateStringsArray>(
        str,
        () => isArray(str) && str.every(e => isString(e)),
      )
    ) {
      let result = '';
      for (let i = 0; i < str.length; i++) {
        result += buildResultStr(str[i], kinds);
        if (i < arg.length) {
          result += buildResultStr(arg[i], kinds);
        }
      }
      return result;
    } else if (isEmptyArray(arg)) {
      return buildResultStr(str, kinds);
    } else {
      throw new Error('pen: 缺少参数');
    }
  };

  /**  笔盒的属性集合  */
  const penCaseParamList = (
    Object.keys(kindList) as (keyof StringKindList | keyof FunctionKindList)[]
  ).map(kind => [
    kind,
    {
      get() {
        return penCaseGetter(kind, kinds);
      },
    },
  ]);

  /**  笔盒的属性集合  */
  const penCaseParam = Object.fromEntries(penCaseParamList);

  /// 笔盒的属性
  Object.defineProperties(penCase, penCaseParam);

  return penCase as Pen;
}

/**
 *
 * 构建 `pen` 的构造函数
 *
 * @param kinds 样式数组
 *
 * @example
 *
 */
const generatePenConstructor = createConstructor(generatePen);

/**  笔盒的属性的 getter   */
function penCaseGetter(kind: KindListKey, kinds: string[]) {
  let newKinds = [];
  if (isType<keyof StringKindList>(kind, isString(kindList[kind]))) {
    /**  样式合并（非函数性）  */
    newKinds = mergeValueIsString(kinds, kindList[kind]);
    return new generatePenConstructor(newKinds);
  } else {
    if ('hex' === kind || 'bgHex' === kind) {
      return (hex: string) => {
        newKinds = mergeValueIsString(kinds, kindList[kind](hex));
        return new generatePenConstructor(newKinds);
      };
    } else if ('rgb' === kind || 'bgRgb' === kind) {
      return (r: string | number, g?: number, b?: number) => {
        if (isString(r) && isUndefined(g) && isUndefined(b)) {
          newKinds = mergeValueIsString(kinds, kindList[kind](r));
        } else if (isNumber(r) && isNumber(g) && isNumber(b)) {
          newKinds = mergeValueIsString(kinds, kindList[kind](r, g, b));
        } else {
          throw new Error(
            `${kind} 的参数类型不正确，请使用 'rgb' 或 'hex' 函数`,
          );
        }
        return new generatePenConstructor(newKinds);
      };
    } else if ('color' === kind || 'bgColor' === kind) {
      /**
       * 456
       */
      return (r: string | number, g?: number, b?: number) => {
        if (isString(r) && isUndefined(g) && isUndefined(b)) {
          newKinds = mergeValueIsString(kinds, kindList[kind](r));
        } else if (isNumber(r) && isNumber(g) && isNumber(b)) {
          newKinds = mergeValueIsString(kinds, kindList[kind](r, g, b));
        } else {
          throw new Error(
            `${kind} 的参数类型不正确，请使用 'rgb' 或 'hex' 函数`,
          );
        }
        return new generatePenConstructor(newKinds);
      };
    } else if ('number' === kind || 'bgNumber' === kind) {
      return (n: number) => {
        if (isNumber(n)) {
          newKinds = mergeValueIsString(kinds, kindList[kind](n));
          return new generatePenConstructor(newKinds);
        } else {
          throw new TypeError(`${kind} 的参数应为有效正整数数值，范围 0 - 255`);
        }
      };
    } else {
      throw new Error(`${kind} 函数不存在`);
    }
  }
}

export { generatePenConstructor as generatePen };
