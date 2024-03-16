//animacion de aparicion para cada elemento en la pantalla

document.addEventListener('DOMContentLoaded', () => {
  const elementosAnimados = document.querySelectorAll('.animated__element');
	const puntoAnimado = document.querySelectorAll('.animated__point');
	
	const cargarElemento = (entradas, observador) => {
		entradas.forEach( (entrada) => {
			if(entrada.isIntersecting == true) {
					entrada.target.classList.add('animation__element');
					entrada.target.classList.add('animation__point');
			}
	});
	};

	const observador = new IntersectionObserver(cargarElemento, {
		root: null,
		rootMargin: '0px',
		threshold: .8
	});


	elementosAnimados.forEach(elemento =>  {
		observador.observe(elemento);
	});

	puntoAnimado.forEach(punto => {
		observador.observe(punto)
	});

}); 