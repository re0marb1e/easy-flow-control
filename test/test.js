const flowControl = require('../index');

flowControl.series([
  function (callback, result){
    setTimeout(function (){
      console.log('series test 1');
      callback('series test 1 => series test 2');
    }, 200);
  },
  function (callback, result){
    setTimeout(function (){
      console.log(result);
      console.log('series test 2');
      callback();
    }, 100);
  }
]);

flowControl.parallel([
  function (callback){
    setTimeout(function (){
      console.log('parallel test 1');
    }, 200);
  },
  function (callback){
    setTimeout(function (){
      console.log('parallel test 2');
    }, 100);
  }
]);
