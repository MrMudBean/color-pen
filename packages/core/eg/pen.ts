import { dev } from '@qqi/dev';
import { _p } from 'a-node-tools';
import { randomPen, redPen } from '../src';
dev.skip('测试各种笔的样式', it => {
  it('测试 redPen', () => {
    _p(redPen`红色的字`.concat('普通的字'));
    _p(redPen.bold`红色加粗的字`.concat('普通的字'));
    _p(randomPen`随机色值文本`);
    _p(randomPen`随机色值文本`);
    _p(randomPen`随机色值文本`);
    _p(randomPen`随机色值文本`);
  });

  it('测试任意类型的数据', () => {
    _p(randomPen(1));
    _p(randomPen(undefined));
    _p(randomPen(true));
    _p(randomPen`hello ${true} 嗨的 ${0} ${undefined} ${null}`);
    _p(randomPen`hello ${true} 嗨的 ${0} ${undefined} ${Symbol(121)}`);
  });
});
