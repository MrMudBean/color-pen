/****************************************************************************
 *  @Author Mr.MudBean
 *  @Email Mr.MudBean@outlook.com
 *  @ProjectName color pen
 *  @FileName generateNumber.ts
 *  @CreateDate  周四  04/24/2025
 *  @Description 测试使用 ANSI 色值数值
 ****************************************************************************/

import { dev } from '@qqi/dev';
import { pen } from '../src/index';
import assert from 'node:assert';

dev('测试 ANSI 色值数值', async it => {
  it('测试使用正常数值', () => {
    assert.equal(pen.number(1)`你好`, '\x1b[38;5;1m你好\x1b[0m');
  });
  it('测试使用小于 0 的值', () => {
    assert.equal(pen.number(-1)`你好`, '\x1b[38;5;0m你好\x1b[0m');
  });
  it('测试使用大于 255 的值', () => {
    assert.equal(pen.number(Infinity)`你好`, '\x1b[38;5;255m你好\x1b[0m');
  });

  it('测试使用浮点数', () => {
    assert.equal(pen.number(1.1)`你好`, '\x1b[38;5;1m你好\x1b[0m');
  });
  it('测试使用浮点数', () => {
    assert.equal(pen.number(1.9)`你好`, '\x1b[38;5;2m你好\x1b[0m');
  });

  it('测试使用 NaN', () => {
    assert.notEqual(pen.number(NaN)`你好`, '\x1b[38;5;255m你好\x1b[0m');
  });

  it('测试使用背景色', () => {
    assert.equal(pen.bgNumber(Infinity)`你好`, '\x1b[48;5;255m你好\x1b[0m');
  });

  it('测试使用非数值', () => {
    // eslint-disable-next-line jsdoc/check-tag-names
    /**  @ts-expect-error: 忽略类型错误，因为就是要检测类型错误  */
    assert.throws(() => pen.number(true)`你好`, TypeError);
  });
});
