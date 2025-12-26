import { dev } from '@qqi/dev';
import { truncateStringWithChar } from '../src';
import assert from 'node:assert';

dev('测试 truncateStringWithChar', async it => {
  await it('测试简单不含 ANSI ', async it => {
    it.afterEach(() => {
      console.log('i am fun ');
    });
    it('', () => {
      assert.equal(truncateStringWithChar('爱我中华', 1), ' ');
      assert.equal(truncateStringWithChar('爱我中华', -1), ' ');
    });
    it('', () => {
      assert.equal(truncateStringWithChar('爱我中华', 2), '爱');
      assert.equal(truncateStringWithChar('爱我中华', -2), '华');
    });
    it('', () => {
      assert.equal(truncateStringWithChar('爱我中华', 3), '爱 ');
      assert.equal(truncateStringWithChar('爱我中华', -3), '华 ');
    });
    it('', () => {
      assert.equal(truncateStringWithChar('爱我中华', 4), '爱我');
      assert.equal(truncateStringWithChar('爱我中华', -4), '中华');
    });
  });

  await it('测试含 ANSI 的', it => {
    it('ansi 在行首', () => {
      assert.equal(
        truncateStringWithChar('\x1b[38;5;1m爱我中华', 4),
        '\x1b[38;5;1m爱我\x1b[0m',
      );

      assert.equal(truncateStringWithChar('\x1b[38;5;1m爱我中华', -4), '中华');
    });
    it('ansi 在需要的文中', () => {
      assert.equal(
        truncateStringWithChar('爱\x1b[38;5;1m我中华', 4),
        '爱\x1b[38;5;1m我\x1b[0m',
      );
      assert.equal(truncateStringWithChar('爱\x1b[38;5;1m我中华', -5), '中华 ');
    });
    it('ansi 在需要的尾部', () => {
      assert.equal(truncateStringWithChar('爱\x1b[38;5;1m我中华', 3), '爱 ');
      assert.equal(
        truncateStringWithChar('\x1b[38;5;1m爱\x1b[0m我中华', 3),
        '\x1b[38;5;1m爱\x1b[0m ',
      );
      assert.equal(
        truncateStringWithChar('爱我中\x1b[38;5;1m华\x1b[0m', -3),
        '\x1b[0m华\x1b[0m ',
      );
    });
  });
});
