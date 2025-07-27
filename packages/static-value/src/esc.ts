const _esc = '\x1b';

class ESC {
  /**  干净的控制台  */
  clean(): string {
    return _esc.concat('c');
  }
}

export type escString = string & ESC;

/**   ANSI 转义序列的起始标志符  */
export const esc = _esc as escString;
