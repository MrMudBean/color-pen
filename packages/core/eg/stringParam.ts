import { pen } from '../index';
import { dev } from '@qqi/dev';

dev.skip('测试参数为单字符串的情况', () => {
  const log = console.log;

  const boldPen = pen.bold;

  const redPen = pen.red;

  const redBoldPen = redPen.bold;

  const redBoldYellowBgPen = redBoldPen.bgYellow;

  const italicPen = redBoldYellowBgPen.italic;
  log(pen('标准的文本展示'));

  log(boldPen('粗体文本展示'));

  log(redPen('红色文本展示'));

  log(redBoldPen('红色粗体文本展示'));

  log(pen.random('任意色值的文本'));

  log(pen.random('任意色值的文本'));

  log(redBoldYellowBgPen('红色粗体黄色背景的文本'));

  log(
    pen.red.blink(
      `红色的闪烁（${pen.underline.random('内嵌的任意色的带下划线的文本')}）的文本`,
    ),
  );

  log(italicPen('斜体文本'));
  console.log(pen.hex('0xff0000')('红色文本'));
  console.log(pen.bgHex('0xff0000')('红色背景'));

  console.log(pen.rgb(255, 0, 0)('红色文本'));
  console.log(pen.bgRgb(255, 0, 0)('红色背景'));

  console.log(pen.color(255, 0, 0)('红色文本'));

  console.log(pen.bgColor(255, 0, 0)('红色背景'));
  console.log(pen.color('rgb(255, 0, 0)')('rgb(255, 0, 0) 红色文本'));

  console.log(pen.bgColor('rgb(255, 0, 0)')('rgb(255, 0, 0) 红色背景'));

  console.log(pen.color('0xff0000')('0xff0000 红色文本'));
  pen.rgb('rgb');
  console.log(pen.bgColor('0xff0000')('0xff0000 红色背景'));
});
