/*
	Script para fazer cada departamento de uma cor
	Autor: Evandro P. Santos
	Obs: Para funcionar é obrigatório o uso do controle Bread Crumb "<vtex.cmc:breadCrumb />", loja modelo que utiliza o script (www.mundofini.vtexcommerce.com.br) 
*/

;(function(window,document,undefined){
	$(document).ready(function(){
		var dept=$(".bread-crumb li:last").text();
		if(dept=="")
		{
			if(typeof console=="object")
				console.info("Não encontrado controle <vtex.cmc:breadCrumb />");
			return false;
		}
		
		dept = dept.replace(/^\s*([\S\s]?)\s$/,'$1').accentsTidy();
		$('body').addClass(dept);
	});
})(window,document);

String.prototype.accentsTidy = function(){
   var s = this;
   var r=s.toLowerCase();
   r = r.replace(new RegExp(/\s/g),"");
   r = r.replace(new RegExp(/[àáâãäå]/g),"a");
   r = r.replace(new RegExp(/æ/g),"ae");
   r = r.replace(new RegExp(/ç/g),"c");
   r = r.replace(new RegExp(/[èéêë]/g),"e");
   r = r.replace(new RegExp(/[ìíîï]/g),"i");
   r = r.replace(new RegExp(/ñ/g),"n");                
   r = r.replace(new RegExp(/[òóôõö]/g),"o");
   r = r.replace(new RegExp(/œ/g),"oe");
   r = r.replace(new RegExp(/[ùúûü]/g),"u");
   r = r.replace(new RegExp(/[ýÿ]/g),"y");
   r = r.replace(new RegExp(/\W/g),"");
   return r;
};