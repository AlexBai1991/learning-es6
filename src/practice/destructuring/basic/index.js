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

let { msg: { detail: dt } } = { msg: { detail: 'hahahah' } };
console.log(`detail is : ${dt}`);
/*
let obj = {};
let arr = []; 
({ a1: obj.prop, a2: arr[0] } = { a1: 'a111', a2: 'a222' });
console.log(`obj.prop is ${obj}, arr is ${arr}`);
*/

let { max, min, sin } = Math;


// 3. 字符串的解构赋值

const [str1, str2, str3, str4, ...strLeft] = 'helloworld'; 
console.log(`${str1}, ${str2}, ${str3}, ${str4}, ${strLeft}`);

let { length: len , trim: tm, toString: ts } = 'teststring';
console.log(JSON.stringify(len, null, 2));
console.log(tm.toString());
console.log(ts.toString());


// 4. 数字和布尔值的解构赋值

let { toString: tsn } = 12;
tsn == Number.prototype.toString;
console.log(tsn);

// 5. 函数参数的解构赋值

function add([arg1 = 1, arg2]) {
  return arg1 + arg2;
}
console.log(add([undefined, 2]));

function minus({ arg1 = 10, arg2 }) { // 参数解构也可以带有默认值
  return arg1 - arg2;
}
console.log(minus({arg2: 7}));
console.log(minus({arg1: 12, arg2: 2}));

console.log([[1, 2], [3, 4]].map(([item1, item2]) => item1 + item2));
console.log([[1, 2, 4], [1], [9]].map((item) => Math.max.apply(Math, item)));

console.log([1, undefined, 3].map((itm = 'yes') => itm));

// 6. 具体用途

// 6.1 变换变量的值
var num1 = 1, num2 = 2;
[num1, num2] = [num2, num1];
console.log(`num1 is ${num1}, num2 is ${num2}`);

// 6.2 从函数返回多个值
function example1([x, y]) {
  return [x + 1, y + 2];
}
let [ex1, ex2] = example1([1, 2]);
console.log(`ex1 is ${ex1}, ex2 is ${ex2}`);

function example2({ x = 'no x', y }) {
  return {
    ex11: x + ' example2',
    ex22: y + ' example2'
  };
}
let { ex11, ex22 } = example2({ y: 'sss' });
console.log(`ex11 is ${ex11}, ex22 is ${ex22}`);

// 6.3 函数参数的定义

function f1([x, y, z]) { // 参数是一组有次序的值
//... 
} 
f1([1, 2, 3])


function f2({x, y, z}) { // 参数是一组无次序的值
// ... 
}
f2({z: 3, y: 2, x: 1})

// 6.4 提取json数据

var jsonData = {
  id: 42,
  status: 'OK',
  data: [1, 2]
};
let { id, status, data: number } = jsonData;

// 6.5 函数参数的默认值

jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
}) {
  // ... do stuff
};

// 6.6 编码Map结构

var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}

// 6.7 输入模块的制定方法

const { SourceMapConsumer, SourceNode } = require("source-map");