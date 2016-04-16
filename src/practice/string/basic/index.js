'use strict';

// 字符串遍历器接口
let str = 'hello string!';
for (let codePoint of str) {
  console.log(`codePoint: ${codePoint}`);
}

// includes startWith endWith
let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
/*endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束*/

// repeat(n)
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
'na'.repeat(2.9) // "nana" 小数会被取整

// padStart padEnd
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'

// 模板字符串
const whosname = 'Alex Bai <alexbai1991@gmail.com>';
let modelStr = `hello this is from a guy named ${whosname}`;

console.log(whosname, modelStr);