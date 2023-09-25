// forma 1
function lista(limit){
	let lista = {valor:limit, resto:null};
	for(let i=limit-1;i>0;i--){
		lista = {valor:i, resto:lista}
	}
	return lista;
}
console.log(lista(3));
