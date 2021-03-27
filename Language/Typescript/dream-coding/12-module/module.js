exports.a = 'a'; // { a: 'a'}
exports.b = 'b'; // { a: 'a', b: 'b' }
module.exports = function() { } // function () {} 로 값이 덮어 씌워짐