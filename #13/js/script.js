let p = document.getElementsByTagName('p');
console.log(p);
for (let i =0; i< p.length; i++){
	p[i].style.color = 'red';
}

let p1 = document.getElementsByClassName('ttt');
let p2 = document.querySelectorAll('.ttt');
for (let j=0; j < p2.length; j++){
	p2[j].onclick = function(){
		alert('work!');
	}
}
console.log(p1);
console.log(p2);

let tempC = [-4, -3, -1, 2, 2, 3, 4, 5, 6, 6, 4, 2 ];
let CA = 0;
for (let k=0; k<tempC.length; k++){
	CA +=tempC[k];
}
console.log( CA / tempC.length);
console.log(  Math.min.apply(null, tempC) );
console.log(  Math.max.apply(null, tempC) );

let temp2 = [
	[-4, 0, 3],
	[-5, -1, 8],
	[0, 3, 6]
];
console.log('-----------');
for (k=0; k< temp2.length; k++){
	CA = 0;
	for (let l=0; l<temp2[k].length; l++){
		CA +=temp2[k][l];
	}
	console.log( CA / temp2[k].length);
	console.log(  't min='+Math.min.apply(null, temp2[k]) );
	console.log(  't max='+Math.max.apply(null, temp2[k]) );
}