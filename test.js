const user = {
  id: 42,
  is_verified: true,
};

const { id, is_verified } = user;

let a, b;

({ a, b } = { a: 1, b: 2 });

const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true

const obj1 = {
  a: 'a from obj1',
  b: 'b from obj1',
  c: 'c from obj1',
  d: {
    e: 'e from obj1',
    f: 'f from obj1',
  },
};
const obj2 = {
  a: 'a from obj2',
  b: 'b from obj2',
  c: 'c from obj2',
  d: {
    g: 'g from obj2',
    h: 'g from obj2',
  },
};
console.log({ ...obj1, ...obj2 });
// is the same as
// console.log(Object.assign({}, obj1, obj2));
