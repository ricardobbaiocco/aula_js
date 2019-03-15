 
function fazerAcao(){
	var input = document.getElementById("input").value;
	var div = document.getElementById("div").innerHTML;

	if (input == "") {
		alert("Valor Obrigatorio");
		return false;
	}
	
	
	if (input == div) {
		alert("Valores IGUAIS");
	}
	else{
		alert("Valores  NAO sao iguais");
		
	}
	atualiza_dados();
}


function atualiza_dados() {
var multiplica = Math.floor(Math.random() * 100);
document.getElementById("div").innerHTML = multiplica;
document.getElementById("input").value = "" ;
document.getElementById("input").focus();
}

function enter() {
	var botao = window.event.keyCode;
	
	if (botao == 13) {
		fazerAcao();
	}
}