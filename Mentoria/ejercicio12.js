// forma 1 / para visualizar mejor usar un consola del navegador /
const user = [
	{name:"juan",lastname: "hernandez",old:23},
	{name:"maria",lastname:"lopez",old:28},
	{name:"carlos",lastname:"lopez",old:34},
	{name:"lucia",lastname:"hernandez",old:23}
];
const filter = {
	old:23
}
const entriesFilter = Object.entries(filter);
let times = 0;
let result = [];
for(let i in user){
	let obj = Object.entries(user[i]);
	times = 0;
	for(let j in obj){
			for(let k in entriesFilter){
					if((obj[j][0]===entriesFilter[k][0])&&(obj[j][1]===entriesFilter[k][1])){
							times+=1;
							if(times == entriesFilter.length){
									result.push(user[i]);
							}
					}
			}
	}
}
console.log(result);
