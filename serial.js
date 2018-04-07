"use strict"

let callbacks;

const serial = function (cbs){
	callbacks = cbs || [];
	next();
}

function next(result){
	if( callbacks.length >=1 ){
		let cb = callbacks.shift();
		cb(next, result);
	}
}

module.exports = serial;
