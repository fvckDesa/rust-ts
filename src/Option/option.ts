import { Kind, KindSymbol } from "../kind";

type OptionEnum<T> = Kind<"Some", { value: T }> | Kind<"None">;

export class OptionImpl<T> {
  public constructor(private readonly kind: OptionEnum<T>) {}

  public unwrap(): T {
    if (this.kind[KindSymbol] === "Some") {
      return this.kind.value;
    } else {
      throw new Error();
    }
  }

  public expect(err: string): T {
    if (this.kind[KindSymbol] === "Some") {
      return this.kind.value;
    } else {
      throw new Error(err);
    }
  }
}

export type Option<T> = OptionImpl<T>;

export function Some<T>(value: T): Option<T> {
  return new OptionImpl({
    [KindSymbol]: "Some",
    value,
  });
}

export const None = new OptionImpl<never>({ [KindSymbol]: "None" });
