
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

var criamosquitotempo = 1500;


var nivel = window.location.search;
nivel = nivel.replace('?', '');

if (nivel ==='normal') {
	criamosquitotempo = 1500;

} else if (nivel==='dificil') {
	criamosquitotempo = 1000;
	
} else if (nivel=== 'lenda') {

	criamosquitotempo=750;

}


function ajustaTamanhoPalcoJogo(){

	altura = window.innerHeight
	largura = window.innerWidth
	

}


ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
	
	tempo -=1

	if (tempo <0) {

		clearInterval(cronometro);
		clearInterval(criamosquito);
		window.location.href = 'vitoria.html';
	}else {
		document.getElementById('cronometro').innerHTML = tempo;

	}

}, 1000)


function PosicaoRandom(){


		//remove mosquito

		if (document.getElementById('mosquito')) {

				document.getElementById('mosquito').remove();

		if (vidas >3) {
			
			window.location.href = 'gameover.html';

		} else {

		document.getElementById('vida' + vidas).src="imagens/coracao_vazio.png";
		vidas++
		}
		


		}



	var posicaoX = Math.floor(Math.random() * largura) - 90;
	var posicaoY = Math.floor(Math.random() * altura) - 90;

	posicaoX = posicaoX < 0 ? 0 : posicaoX;
	posicaoY = posicaoY < 0 ? 0 : posicaoY;

	console.log(posicaoX, posicaoY);

	// Elemento HTML
	var mosquito = document.createElement('img');
	mosquito.src = 'imagens/mosquito.png';
	mosquito.className = TamanhoAleatorio();
	mosquito.style.left = posicaoX + 'px';
	mosquito.style.top = posicaoY + 'px';
	mosquito.style.position = 'absolute';
	mosquito.id = 'mosquito';
	mosquito.onclick = function () {
		this.remove()
	}


	document.body.appendChild(mosquito);

}

function TamanhoAleatorio() {

	var classe = Math.floor(Math.random() * 3);

	switch (classe) {
		case 0:
			return 'mosquito1';

		case 1:
			return 'mosquito2';

		case 2:
			return 'mosquito3';

		

	}
}

function LadoAleatorio() {

	var classe = Math.floor(Math.random() * 2);

	switch (classe) {
		case 0:
			return 'ladoA';

		case 1:
			return 'ladoB';

	

		

	}


}