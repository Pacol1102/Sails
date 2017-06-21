const async = require('async');

function fibonacci(cb){
	cb(null, 0, 1);
}

function fibonacci2(firstValue, secondValue, cb){
	thirdValue = firstValue + secondValue;
	console.log(thirdValue);
	return cb(null, secondValue, thirdValue);
}

function hourIntervals(cb){
	cb(null, 1000);
}

function hourIntervals2(sleep, cb){
	setTimeout(function(){
		var hourUnix = Date.now();
		if(hourUnix % 2 == 0){
			console.log(hourUnix);
		}
		else{
			console.log(":)");
		}
		return cb(null, sleep);
	}, sleep);
	sleep + 1000;
}

async.waterfall([
	fibonacci,
	fibonacci2,
	fibonacci2,
	fibonacci2,
	fibonacci2,
	fibonacci2,
	fibonacci2,
	fibonacci2,
	fibonacci2,
	], (err, cb) => {
		if(err){
			console.log("Error");
		}
		else{
			
			return;
		}
	});
async.waterfall([
	hourIntervals,
	hourIntervals2,
	hourIntervals2,
	hourIntervals2,
	hourIntervals2,
	hourIntervals2,
	hourIntervals2,
	hourIntervals2,
	hourIntervals2,
	], (err, cb) => {
		if(err){
			console.log("Error");
		}
		else{
			return;
		}
	});