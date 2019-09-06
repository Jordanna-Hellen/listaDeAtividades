const tempo = document.querySelector("#tempo");
const botao = document.querySelector("#start");
const cronometro = document.querySelector("#cronometro");
let v = 0; 

const contar = function(){
	if(v == 0){
		clearInterval(contar);
		return false;
	}
	v = v-1;
	cronometro.innerText = v;

}

tempo.onchange = function(){
	v = parseInt(tempo.value);
}

botao.onclick = function(){
	setInterval(contar, 1000);
}
    