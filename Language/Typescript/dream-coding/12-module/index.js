  // index.js
  const { a, b } = require('./module.js'); // error, 없음
  const sum = require('./module.js'); // function () {}

  console.log(a,b,sum)