let a = [];
let b = [12, 13, 66, 999];
console.log( b.length );
let c = [3, 'Hello', true];
console.log( c );
c[2] = 999;
c[5] = 777;
delete c[5];
console.log( c );

let out = document.getElementById('out');
let str = '';
for (let i = 0; i< c.length; i++  ) {
	if (c[i]!==undefined) str +=i+' - '+c[i]+'<br>';
}
out.innerHTML = str;

