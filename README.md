# issue with `nock@beta`

this repository demostrates an issue (https://github.com/nock/nock/issues/2780) with [`nock@14.0.0-beta.12`](https://github.com/nock/nock/tree/v14.0.0-beta.12) where request headers that are set using [`Headers.set()`](https://developer.mozilla.org/en-US/docs/Web/API/Headers/set) are being mishandled by `nock`'s interceptor. as a result, `this.req.headers` (the `nock` accessor for request headers, as described in [these docs](https://github.com/nock/nock/tree/v14.0.0-beta.12?tab=readme-ov-file#access-original-request-and-headers)) is returning bad header values.

## reproduction steps

with node.js installed (this was tested on v20.16.0), run the following commands:

```sh
npm install
node index.js
```

the assertion should fail.

if you install [`nock@14.0.0-beta.7`](https://github.com/nock/nock/tree/v14.0.0-beta.7), the assertion will pass:

```sh
npm install nock@14.0.0-beta.7
node index.js
```
