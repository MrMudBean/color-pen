import { getRandomInt } from 'a-js-tools';

/**
 *
 * 构建之前
 *
 */
export function beforeBuild(kinds: string[]): string[] {
  return kinds.map(kind => {
    if (kind === 'random') {
      return `38;5;${getRandomInt(255)}`;
    } else if (kind === 'bgRandom') {
      return `48;5;${getRandomInt(255)}`;
    }
    return kind;
  });
}
