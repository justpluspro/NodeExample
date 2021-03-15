/**
 * Node 操纵文件系统是通过一个重要的原生模块来执行的：fs
 * 对于 fs 中的绝大多数 api 来说，Node 都提供了两个版本：同步版本与异步版本
 *
 * 对于同步版本与异步版本来说，其在方法的命名上存在一个规则
 *
 * xxxx（异步）
 * xxxxSync（同步）
 *
 */

const fs = require('fs');

//同步版本
// try {
//     const data = fs.readFileSync('2.txt', 'utf8');
//     console.log(data);
// }catch (e) {
//     console.error(e);
// }

// 异步版本
fs.readFile("1.txt", 'utf8',function(error, data) {
    if(error) {
        console.log('occurred error');
        console.log(error);
    } else {
        console.log(data);
    }
});
