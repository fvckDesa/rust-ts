import { expect, it, describe } from "vitest";
import { Some, None, OptionImpl } from "./option";

describe("Option", () => {
  it("Some return Option", () => {
    const optionNum = Some(12);

    expect(optionNum).toBeInstanceOf(OptionImpl);
  });

  it("None return Option", () => {
    expect(None).toBeInstanceOf(OptionImpl);
  });

  it("Option.unwrap over Some must return the value", () => {
    const str = Some("test").unwrap();

    expect(str).toBe("test");
  });

  it("Option.unwrap over None must throw Error", () => {
    expect(() => None.unwrap()).toThrowError(Error);
  });

  it("Option.expect over Some must return the value", () => {
    const str = Some("test").expect("This message mustn't be throw");

    expect(str).toBe("test");
  });

  it("Option.expect over None must throw Error", () => {
    expect(() => None.expect("Must throw")).toThrowError(Error);
  });
});
