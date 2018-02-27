"use strict"

let completeTaskCount = 0;
let taskCount;

function parallel(parallelCallbacks){
	taskCount = parallelCallbacks.length;
	parallelCallbacks.forEach(cb => {
		cb(checkIfComplete);
	});
}

function checkIfComplete(){
	completeTaskCount ++;
	if(completeTaskCount == taskCount){
		// do next
	}
}

module.exports = parallel;
