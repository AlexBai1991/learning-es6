'use strict';

// 1. 数组的解构赋值
let [a, b, c] = [1, 2, 3];
console.log(`a = ${a}, b = ${b}, c = ${c}`);

let [foo, [[bar], baz]] = ['foo', [['bar'], 'baz']];
console.log(`foo = ${foo}, bar = ${bar}, baz = ${baz}`);

let [ , , third] = ['first', 'second', 'third'];
console.log(`third = ${third}`);

let [head, ...tail] = [1, 2, 3, 4, 5, 6];
console.log(`head = ${head}, tail = ${tail}`);

let [x, y, ...z] = ['a'];
console.log(`x = ${x}, y = ${y}, z = ${z}`);

let [m, n = 'nnn'] = ['mmm']; // 默认值
console.log(`m = ${m}, n = ${n}`);

let [x1, y1 = 'y1'] = ['x1', undefined]; // 等号左边其中的项必须是严格相等undefined才可以取得默认值
let [x2, y2 = 'y2'] = ['x2', null];

// 2. 对象的解构赋值
let { foo2, bar2 } = { foo2: 'aaa', bar2: 'bbb' };
console.log(`foo2: ${foo2}, bar2: ${bar2}`);

let { foo3, bar3, baz3 } = { bar3: 'bar3', baz3: 'baz3' };
console.log(`foo3: ${foo3}, bar3: ${bar3}, baz3: ${baz3}`);

let { foo4: f4, bar4: b4 } = { foo4: 'foo4', bar4: 'bar4' };
// console.log(`foo4: ${foo4}, bar4: ${bar4}`);
console.log(`foo4: ${f4}, bar4: ${b4}`);

let { x3, y3 = 'y222' } = { x3: 'x222' };
console.log(`x3: ${x3}, y2: ${y3}`);

let { message: msg = 'this is a message while saying no' } = { message: 'this is a message while saying yes' };
console.log(`message: ${msg}`);

 

// 3. 字符串的解构赋值


// 4. 数字和布尔值的解构赋值


// 5. 函数参数的解构赋值


// 6. 圆括号问题

