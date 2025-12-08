async function first() {
  return "Hello";
}

async function second() {
  let msg = await first();
  console.log(msg); // Hello
}

second();
