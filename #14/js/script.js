let a = [3,4,5];
a[5] = 9;
delete a[5];
//умножить каждый элемент массива на 2 6 - 8-10
let b = [];
for (let i=0; i< a.length; i++){
	b[i] = a[i]*2;
}
console.log(a);
console.log(b);

// let b = a.map(function(currentValue, index, array){
//	return tralala;
//});

let c = a.map(function(x){
	return x*2;
});
console.log(c);