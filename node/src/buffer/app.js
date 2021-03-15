const buffer = Buffer.alloc(128);

const length = buffer.write('hello world你好', 'utf8');
console.log(length); //hello world  11   | hello world你好  17
