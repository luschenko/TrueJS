function first(y){
	console.log(1);
	y();
}

function second(a,b){
	console.log(a*b);
}

first(function(){
	console.log(100*4);
});
//second(4,7);