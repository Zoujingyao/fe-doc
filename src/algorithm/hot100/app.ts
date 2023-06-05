const tuple = <T extends string[]>(...args: T) => args;
const PresetColorTypes = tuple('pink', 'red', 'yellow', 'orange', 'green', 'blue');
export type ElementOf<T> = T extends (infer E)[] ? E : T extends readonly (infer F)[] ? F : never;
export type PresetColorType = ElementOf<typeof PresetColorTypes>;
export type LiteralUnion<T extends U, U> = T | (U & {});

console.log('color: ', PresetColorTypes);

const PresetColorRegex = new RegExp(`^(${PresetColorTypes.join('|')})(-inverse)?$`);
console.log('color re: ', PresetColorRegex);
const color: LiteralUnion<PresetColorType, string> = 'blue-inverse';
console.log('isMatch: ', PresetColorRegex.test(color));
