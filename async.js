async function returnPromise() {
  return Promise.resolve("Hello");
}

const hello = await returnPromise();
console.info(hello);
//  error karena await harus dalam async
