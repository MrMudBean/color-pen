/****************************************************************************
 *  @Author earthnut
 *  @Email earthnut.dev@outlook.com
 *  @ProjectName color-pen
 *  @FileName t.ts
 *  @CreateDate  周二  04/22/2025
 *  @Description ANSI 转义相关
 ****************************************************************************/

import { csi } from './src/csi';

/**
 * 重置终端的样式
 *
 * 重置终端的文本样式，如文本（前景）色、背景色、字体粗细、是否斜体、是否隐藏文本色、是否启用方向显示
 */
export const terminalResetStyle = `${csi}0m`;

export { csi } from './src/csi';
export { esc } from './src/esc';
export { terminalRegExp } from './src/terminalRegExp';
