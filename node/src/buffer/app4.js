const hello = Buffer.from('hello');
const world = Buffer.from('world');
const welcome = Buffer.from('welcome');

const bufferArray = [hello, world, welcome];

console.log(bufferArray.length); //3

const bufferResult = Buffer.concat(bufferArray, hello.length+ world.length+ welcome.length);

console.log(bufferResult.length); //17


