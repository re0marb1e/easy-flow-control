const flowControl = require('../index');

flowControl.series([
  function (callback, result){
    console.log('test 1');
    callback('Hello, test 2!');
  },
  function (callback, result){
    console.log(result);
    console.log('test 2');
    callback();
  }
]);
