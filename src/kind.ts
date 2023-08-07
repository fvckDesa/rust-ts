export const KindSymbol = Symbol("kind");

export type Kind<T extends string, O extends object = object> = {
  readonly [KindSymbol]: T;
} & O;
