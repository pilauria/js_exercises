const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

const addOneToOne = () => 1 + 1;

console.log(timeFuncRuntime(addOneToOne));

timeFuncRuntime(() => {
  for (let i = 10; i > 0; i--) {
    console.log(i);
  }
});
