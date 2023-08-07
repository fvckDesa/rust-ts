import { expect, it, describe } from "vitest";
import { Ok, Err, ResultImpl } from "./result";

describe("Result", () => {
  it("Ok return Result", () => {
    const resultNum = Ok(12);

    expect(resultNum).toBeInstanceOf(ResultImpl);
  });

  it("Err return Result", () => {
    const error = Err("error");
    expect(error).toBeInstanceOf(ResultImpl);
  });

  it("Result.unwrap over Ok must return the value", () => {
    const str = Ok("test").unwrap();

    expect(str).toBe("test");
  });

  it("Result.unwrap over Err must throw Error", () => {
    const err = Err("error");
    expect(() => err.unwrap()).toThrowError("error");
  });

  it("Result.expect over Ok must return the value", () => {
    const str = Ok("test").expect("This message mustn't be throw");

    expect(str).toBe("test");
  });

  it("Result.expect over Err must throw Error", () => {
    const error = Err("error");
    expect(() => error.expect("Must throw")).toThrowError(
      new Error("Must throw")
    );
  });
});
