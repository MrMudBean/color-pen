import { esc } from './esc';

// t 的保留是因为在很多项目中使用，且过多，只能在大版本只进行更替，
/**
 * ## ANSI 转义序列的前缀
 *
 * 英文 Control Sequence Introducer
 */
export const csi = `${esc}[`;
