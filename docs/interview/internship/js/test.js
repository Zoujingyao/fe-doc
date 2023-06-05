// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i));
// }

import React from 'react';

var a = {},
  b = { key: 123 },
  c = { key: 456 };
a[b] = 'b';
a[c] = 'c';
console.log(a, a[b]);
