import assert from "node:assert";
import nock from "nock";

nock("https://httpbin.org")
  .get("/anything")
  .reply(200, function () {
    return this.req.headers;
  });

const headers = new Headers({ "x-header": "foo" });

// `.set()` should overwrite the previous value, per MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Headers/set
headers.set("x-header", "bar");

const result = await fetch("https://httpbin.org/anything", { headers }).then((res) => res.json());

assert(result["x-header"] === "bar");

console.log("success!");
