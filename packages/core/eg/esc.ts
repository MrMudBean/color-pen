import assert from 'node:assert';
import { terminalRegExp as t } from '@color-pen/static';
import { pen } from '../index';
import { dev } from '@qqi/dev';

dev.skip('测试与 ANSI 相关的代码', async it => {
  const terminalRegExp = t();
  it.beforeEach(() => {
    terminalRegExp.lastIndex = 0;
  });
  it.afterEach(() => {
    terminalRegExp.lastIndex = 0;
  });

  it('测试 regExp 是否包含重置符', () => {
    assert.equal(terminalRegExp.test('\x1b[0m12345'), true);
    assert.equal('\x1b', '\u001b');
  });
  it('测试光标的显隐 ANSI  转义', () => {
    assert.equal(terminalRegExp.test('\x1b[?25lasd'), true);
  });

  it('测试光标的隐藏 ANSI 转义', () => {
    assert.equal(terminalRegExp.test('\x1b[?25hsdfegr545'), true);
  });

  it('测试属性多属性', () => {
    assert.equal(
      terminalRegExp.test('\x1b[23;1;3;5;6;8;9;48;5;125m你好'),
      true,
    );
  });

  it('测试属性色值', () => {
    assert.equal(terminalRegExp.test('\x1b[23m你好'), true);
  });

  it('测试属性重置', () => {
    assert.equal(terminalRegExp.test('你好\x1b[m'), true);
  });

  it('测试大段文本', () => {
    const text = '你好';
    const colorText = pen.bgBrightBlack.bold.reversed.italic.blink(text);

    assert.equal(colorText.replace(terminalRegExp, ''), text);
  });
});
