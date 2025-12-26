import { dev } from '@qqi/dev';
import { pen } from '../src/index';
import { colorText } from '../src/colorText';

dev('测试与 color text 相关的代码', dev => {
  dev('测试', () => {
    console.log('123');
  });

  dev('测试仅有文本色返回值', () => {
    const result = colorText(''.concat(pen.red`红色的字`));
    console.log('====================================');
    console.log(result);
    console.log('====================================');
  });
  dev('测试文本色及背景色返回值', () => {
    const result = colorText(''.concat(pen.red.bgBlue`红色的字`));
    console.log('====================================');
    console.log(result);
    console.log('====================================');
  });
  dev('测试文本色及背景色加前后其他文本返回值', () => {
    const result = colorText(
      '普通文本'.concat(pen.red.bgBlue`红色的字`).concat('普通文本'),
    );
    console.log('====================================');
    console.log(result);
    console.log('====================================');
  });
});
