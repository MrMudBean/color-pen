import { generatePen } from './pen';

export { generatePen };

export {
  pen,
  redPen,
  bluePen,
  greenPen,
  yellowPen,
  magentaPen,
  cyanPen,
  whitePen,
  brightBlackPen,
  brightRedPen,
  brightGreenPen,
  brightYellowPen,
  brightBluePen,
  brightMagentaPen,
  brightCyanPen,
  brightWhitePen,
  bgBlackPen,
  bgRedPen,
  bgGreenPen,
  bgYellowPen,
  bgBluePen,
  bgMagentaPen,
  bgCyanPen,
  bgWhitePen,
  bgBrightBlackPen,
  bgBrightRedPen,
  bgBrightGreenPen,
  bgBrightYellowPen,
  bgBrightBluePen,
  bgBrightMagentaPen,
  bgBrightCyanPen,
  bgBrightWhitePen,
  boldPen,
  italicPen,
  underlinePen,
  hidePen,
  rgbPen,
  hexPen,
  colorPen,
  bgRgbPen,
  bgHexPen,
  bgColorPen,
  randomPen,
  bgRandomPen,
  numberPen,
  bgNumberPen,
  dimPen,
  blinkPen,
  reversedPen,
} from './penList';

export type {
  Pen,
  KindListKey,
  StringKindList,
  FunctionKindList,
} from './types';

export { strInTerminalLength } from './strInTerminalLength';

export {
  truncateStringWithChar,
  truncateStringWithChar as cutoffStringWithChar,
} from './truncateStringWithChar';

export { strInOneLineOnTerminal } from './strInOneLineOnTerminal';

export { colorText } from './colorText';
