const cor = document.querySelector("#cor");
const botao = document.querySelector("#muda");

botao.onclick = function(){
	document.body.style.backgroundColor = "#"+cor.value;
}