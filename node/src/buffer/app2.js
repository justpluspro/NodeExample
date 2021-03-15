const hello = Buffer.from('hello');
const world = Buffer.from('world');

const number = hello.compare(world);
console.log(number); //比较 hello 和 world 的 ascii 码  -1
const number2 = world.compare(hello);
console.log(number2); //比较 world 和 hello 的 ascii 码 1
