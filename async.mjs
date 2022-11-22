//  mjs secara default function nya adalah async
function returnPromise() {
  return Promise.resolve("Hello");
}

const hello = await returnPromise();
console.info(hello);
