import { Kind, KindSymbol } from "../kind";

type ResultEnum<T, E> = Kind<"Ok", { value: T }> | Kind<"Err", { error: E }>;

export class ResultImpl<T, E> {
  public constructor(private kind: ResultEnum<T, E>) {}

  public unwrap(): T {
    if (this.kind[KindSymbol] === "Ok") {
      return this.kind.value;
    } else {
      throw this.kind.error;
    }
  }

  public expect(err: string) {
    if (this.kind[KindSymbol] === "Ok") {
      return this.kind.value;
    } else {
      throw new Error(err);
    }
  }
}

export type Result<T, E> = ResultImpl<T, E>;

export function Ok<T>(value: T): Result<T, never> {
  return new ResultImpl({
    [KindSymbol]: "Ok",
    value,
  });
}

export function Err<E>(error: E): Result<never, E> {
  return new ResultImpl({
    [KindSymbol]: "Err",
    error,
  });
}
