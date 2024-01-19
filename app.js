let intentos;
let numeroSecreto;

let listaNumerosSorteados = [];
let numeroMaximo = 10;


const generarNumeroSecreto = () => {
	let numeroGenerado = Math.floor( Math.random()*numeroMaximo ) + 1 ;

	console.log(numeroGenerado);
	console.log(listaNumerosSorteados);

	if (listaNumerosSorteados.length == numeroMaximo) {
		asignarTextoElemento('p', 'Ya se asignaron todos los numeros posibles');
	} else {
		if ( listaNumerosSorteados.includes( numeroGenerado ) ) {
			return generarNumeroSecreto();
		} else {
			listaNumerosSorteados.push(numeroGenerado);
			return numeroGenerado;
		}
	
	}
	
	



}


const asignarTextoElemento = (elemento, texto) => {
  const elmentoHTML = document.querySelector(elemento);
  elmentoHTML.innerHTML = texto;
	return;
};

const limpiarCaja = () => {
	document.querySelector('#valorUsuario').value = '';
}

const condicionesIniciales = () => {
	asignarTextoElemento("h1", "Adivina el numero");
	asignarTextoElemento("p", `Ingresa un numero del 1 al ${numeroMaximo}`);

	numeroSecreto = generarNumeroSecreto();
	intentos = 1;

	document.getElementById('reiniciar').setAttribute('disabled', '');
}

const nuevoJuego = () => {
	limpiarCaja();
	condicionesIniciales();

}


const verificarIntento = () => {
  let numeroUsuario = parseInt( document.querySelector('#valorUsuario').value );
	
	if(numeroSecreto === numeroUsuario) {
		asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
		document.getElementById('reiniciar').removeAttribute('disabled');
	} else {
		if ( numeroSecreto > numeroUsuario) {
			asignarTextoElemento('p', 'El numero es mayor')
		} else {
			asignarTextoElemento('p', 'El numero es menor')
		}
		intentos++;
		limpiarCaja();
	}
	return;
};







condicionesIniciales();




