const lampada = document.querySelector("#apagada");
const botao = document.querySelector("#acender");
let status = false;

botao.onclick = function(){
	if (status) {
		lampada.src = "lampada_apg.png";
		botao.value = "acender";
		status = false;
	}else{
		lampada.src = "lampada_aces.png";
		botao.value = "apagar";
		status = true;
	}
	
}
