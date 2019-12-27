const $cuadro = document.querySelectorAll(".cuadro");

const imagenTapada = "/src/imagenTapada.png";

const imagenes = [
	"/src/a.jpg",
	"/src/a.jpg",
	"/src/b.jpg",
	"/src/b.jpg",
	"/src/c.jpg",
	"/src/c.jpg",
	"/src/d.jpg",
	"/src/d.jpg",
	"/src/f.jpg",
	"/src/f.jpg",
	"/src/g.jpg",
	"/src/g.jpg",
	"/src/e.jpg",
	"/src/e.jpg",
	"/src/h.jpg",
	"/src/h.jpg"
];
function ordenarArrayAlAzar() {
	imagenes.sort(function(a, b) {
		return 0.5 - Math.random();
	});
}
ordenarArrayAlAzar();
crearImagenTapada();

// function click() {
// 	$cuadro.forEach(function($cuadro, i) {
// 		segundaImagen = document.querySelector(".imagen"[i]);

// 		setTimeout(e => {
// 			e.target.src = imagenes[i];
// 			if (segundaImagen == e.target.src) {
// 				segundaImagen.target.src = imagenes[i];
// 			} else {
// 				console.log("No entra");
// 			}
// 		}, 2000);
// 	});
// 	$cuadro.appendChild(segundaImagen);
// 	return segundaImagen;
// }

function crearImagenTapada() {
	$cuadro.forEach(function($cuadro, i) {
		imagen = document.createElement("img");
		imagenDadaVuelta = imagenes[i];
		debugger;
		imagen.className += "magen[i];
		imagen.src = imagenTapada;

		imagen.onclick = function(e) {
			imagen = e.target;
			imagen.src = imagenDadaVuelta;
			manejoClickCuadro(e);
		};
		$cuadro.appendChild(imagen);
	});
}

// 	if (imagen.src == e.target.src) {
// 		imagen = e.target;
// 		console.log("entra");
// 	} else {
// 		if (imagen.src == e.target.src) {
// 			return console.log("123");
// 		} else {
// 			return console.log("falla");
// 		}
// 	}
// };
let primerCuadro = null;
function manejoClickCuadro(e) {
	if (primerCuadro === null) {
		primerCuadro = e.target;
	} else {
		if (primerCuadro.src == e.target.src) {
			primerCuadro.className = "deshabilitado";
			e.target.className = "deshabilitado";
			primerCuadro = null;
		} else {
			setTimeout(() => {
				primerCuadro.src = imagenTapada;
				e.target.src = imagenTapada;
			}, 1000);

			console.log("else");
		}
		setTimeout(() => {
			console.log("null");
			primerCuadro = null;
		}, 1000);

		//acá reseteás, porque en cada "turno" das vuelta los cuadros otra vez, entnonces no hay "primerCuadro"
	}
}
// const imagenReal = document.querySelectorAll(".imagen");
// imagenReal.onclick = darVueltaImagen();

// function darVueltaImagen() {
// 	debugger;
// 	if (imagenReal.src == imagenTapada) {
// 		imagenReal.src = imagenes[i];
// 		console.log("123");
// 	} else {
// 		console.log("asd");
// 	}

// const imagenPregunta = document.querySelectorAll(".imagen");

// function darVueltaImagen(imagen) {
// 	imagenPregunta;
// }

// imagenPregunta.onclick = function() {
// 	darVueltaImagen();
// };
// if (imagen.src == imagenTapada) {
// 	imagen.src = imagenes[i];
// }
