function one(a){
	"use strict";
	let b;
	console.log(a); // 5
	arguments[0] = 'Blabla'; 
	console.log(arguments); //?
	console.log(a);//?
	b = Array.from(arguments);
	console.log(b);
}

one(5,6,7,8);