/*
	Script para fazer cada departamento de uma cor
	Autor: Evandro P. Santos
	Obs: Para funcionar é obrigatório o uso do controle Bread Crumb "<vtex.cmc:breadCrumb />", loja modelo que utiliza o script (www.mundofini.vtexcommerce.com.br) 
*/

//Capturando o nome do departamento através do controle bread crumb e convertendo para minuscula e retirando acentuação.
var dept= $(".bread-crumb li:eq(1)").text().trim().replaceSpecialChars().replace(/\s/g,"-").toLowerCase();
//Adicionando a classe com o nome do departamento na TAG body
$('body').addClass(dept);

