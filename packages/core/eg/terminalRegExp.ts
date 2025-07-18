import { dev } from '@qqi/dev';
import { isNull } from 'a-type-of-js';
import { csi, esc, terminalRegExp } from '@color-pen/static';

dev.skip('测试与 terminalRegExp 相关的', it => {
  const str = `${csi}0m${csi}1m${csi}38;5;125;2;5;3m${csi}m${csi}${csi}?25h${csi}?25l${csi}?7h${csi}?7l${csi}r${esc}7${esc}8${esc}c`;
  let arr: RegExpExecArray | null;
  const exgExpStr = terminalRegExp();

  it('测试第一次', () => {
    while (!isNull((arr = exgExpStr.exec(str)))) {
      console.log(arr.length, arr);
    }
  });
});
