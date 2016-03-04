'use strict';

export let letV = 'let variable';
export const CONST_VALUE = 'const variable';

// 1. let 命令
if (!0) {
  let a = 1; // 用let定义的变量作用域范围限制在块级之内，在外部尝试访问会报错.
  var b = 2;
}
// console.log(`a = ${a}`);
console.log(`b = ${b}`);

for (let i = 0; i < 5; i++) {
  console.log(`i = ${i}`);
}
// console.log(`finally i = ${i}`); 

var fnArrs = [];
for (let j = 0; j < 4; j++) {
  fnArrs[j] = function () {
    console.log(`fnArrs[${j}] run result: ${j}`);
  };
}
fnArrs[3]();

/*console.log(c); // 不存在变量声明提升，因此必须先定义变量后使用
let c = 3;*/

var tmp = 123;
if (true) {
  // tmp = '123';
  let tmp;  // 暂时性死区
  console.log(tmp);
}
console.log(tmp);

if (true) {
  let d = 4;
  // let d = '4'; // 不允许在相同的作用域内重复声明同一个变量
}

// 2. 块级作用域
// ES5只有全局作用域和函数作用域，没有块级作用域。
let fTemp = 'ftemp outside';
function f() {
  console.log(fTemp);
  if (!false) {
    let fTemp = 'ftemp inside';
    console.log(fTemp);
  }
  console.log(fTemp);
}
f();

if (true) {
  let innerA = 'inner a';
  function fnA() {
    console.log(innerA);
  }
  fnA();
}
// fnA();

// 3. const命令
const PI = 3.141592654;
console.log(PI);
// PI = 3.14; // 不允许对声明的常量进行再次赋值。
// 常量和let命令声明变量一样，同样不可以再次声明同一变量，不存在变量声明提升和存在暂时性死区。