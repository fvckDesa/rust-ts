import { Ok, Err, Result } from "./src";

function parseJson(text: string): Result<unknown, Error> {
  try {
    return Ok(JSON.parse(text));
  } catch (error) {
    return Err(error as Error);
  }
}

const res = parseJson("test");

console.log(res.expect("invalid json"));
