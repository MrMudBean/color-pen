import { terminalRegExp } from '@color-pen/static';

/**
 * ## 计算字符串在终端显示的长度
 *  经测试，大数组（百万级别）在 mac 下 reduce 的耗时是 for  的 2 - 5 倍
 *  在百万与万之间测试，reduce 耗时约为 1 毫秒，for 接近 0
 *  在万以下级别，reduce 与 for 耗时都接近为 0
 *
 * ```ts
 * {
 *    const a = '1'
 *      .repeat(1000000)
 *      .split('')
 *      .map(e => Number(e));
 *    const now = Date.now();
 *    a.reduce((acc, x) => acc + x, 0);
 *    const afterReduce = Date.now(); // mac 耗时  5 毫秒 windows 耗时 19 毫秒
 *    console.log(afterReduce - now);
 *    let sum = 0;
 *    for (let i = 0; i < a.length; i++) sum += a[i];
 *    console.log(Date.now() - afterReduce); // mac 耗时 1 / 2 毫秒 windows 耗时 7 毫秒
 *  }
 * ```
 * 所有，本函数使用 reduce 计算
 */
export function strInTerminalLength(str: string): number {
  const _t = terminalRegExp();
  // 去除终端控制字符
  const noANSIStr = str.replace(_t, '');
  let strLen = 0;
  for (let i = 0, j = noANSIStr.length; i < j; i++)
    strLen += 1 + Number(isTwoLen(noANSIStr[i]));
  return strLen;
}

/**
 *
 * 是否在终端占用两个字符宽度
 *
 */
function isTwoLen(code: string) {
  const codePoint = code.codePointAt(0) || 0;
  return (
    // 中日韩统一表意文字 (CJK Unified Ideographs)
    (codePoint >= 0x4e00 && codePoint <= 0x9fff) ||
    // 中日韩统一表意文字扩展A区 (Extension A)
    (codePoint >= 0x3400 && codePoint <= 0x4dbf) ||
    // 中日韩统一表意文字扩展B-F区 (Extensions B-F)
    (codePoint >= 0x20000 && codePoint <= 0x2ebef) ||
    // 中日韩兼容表意文字 (Compatibility Ideographs)
    (codePoint >= 0xf900 && codePoint <= 0xfaff) ||
    // 全角符号 (Fullwidth Symbols)
    (codePoint >= 0xff00 && codePoint <= 0xffef) ||
    // 半角片假名 (Halfwidth Katakana)
    (codePoint >= 0xff65 && codePoint <= 0xff9f) ||
    // Emoji 范围
    (codePoint >= 0x1f300 && codePoint <= 0x1fad6) ||
    // 更多Emoji范围
    (codePoint >= 0x1f600 && codePoint <= 0x1f64f) ||
    (codePoint >= 0x1f680 && codePoint <= 0x1f6ff) ||
    (codePoint >= 0x2600 && codePoint <= 0x26ff) ||
    (codePoint >= 0x2700 && codePoint <= 0x27bf) ||
    // 韩文字母 (Hangul Syllables)
    (codePoint >= 0xac00 && codePoint <= 0xd7af) ||
    // 其他全角字符
    (codePoint >= 0x3000 && codePoint <= 0x303f) // 中日韩符号和标点
  );
}
