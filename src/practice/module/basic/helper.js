'use strict';

const foo = 'alexbai';
// export bar
export const bar = [1, 2, 4];
// export baz
export function baz() {
  console.log('baz');
}
export let obj =  {
  test() {
    return 'test';
  },
  name: 'tst'
};
// export default
export default foo;