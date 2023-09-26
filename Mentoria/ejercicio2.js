// forma 1 / programa que busca letra (ver rama ej-enloquent-JS) /
function contar(string,value){
	let contar=0;
	for(let i in string){
			if(string[i]==value){
					contar+=1;
			}
	}
	return contar;
}
let string ='F en F hola F';
console.log(contarFs(string,'F'));
