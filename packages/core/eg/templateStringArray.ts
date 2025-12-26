import { dev } from '@qqi/dev';
import { pen } from '../src/index';
import assert from 'node:assert';
import { terminalResetStyle } from '@color-pen/static';

dev.skip('测验模版函数', async it => {
  it('', () => {
    /**    */
    function a(str: string): void;
    function a(str: TemplateStringsArray, ...a: string[]): void;
    /**    */
    function a(str: TemplateStringsArray | string, ...a: string[]) {
      return [str, a][1].length;
    }

    assert.equal(a`11${'8555'}23`, 1);
    assert.equal(a('你好'), 0);
  });

  it('测试模版函数的调用', async it => {
    it('测试普通输入红色文本', () => {
      assert.notEqual(pen.red`你好`, '你好');
      assert.equal(pen.red`你好`, '\x1b[38;5;1m你好\x1b[0m');
    });

    it('测试普通红色文本夹杂其他数据', () => {
      assert.equal(
        pen.red`红色文本${pen.blink`闪烁的文本`}红色文本`,
        '\x1B[38;5;1m红色文本\x1B[0m\x1B[5m闪烁的文本\x1B[0m\x1B[38;5;1m红色文本\x1B[0m',
      );
    });

    it('测试模版使用的时候使用了 `terminalResetStyle`', () => {
      assert.equal(
        pen.italic`斜体${terminalResetStyle.concat('依旧是斜体')}文本`,
        '\x1B[3m斜体\x1B[0m\x1B[0m\x1B[3m依旧是斜体\x1B[0m\x1B[3m文本\x1B[0m',
      );
    });

    it('测试输入使用 hex 设置色值', () => {
      const result = pen.hex('0x000000')`好的`;

      assert.notEqual(result, '\x1B[38;5;255m好的\x1B[0m');
    });
  });
});
