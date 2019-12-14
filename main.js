const $cuadro = document.querySelectorAll(".cuadro");

const imagenTapada = "src/imagenTapada.png";

const imagenes = [
	"src/a.jpg",
	"src/b.jpg",
	"src/c.jpg",
	"src/d.jpg",
	"src/e.jpg",
	"src/f.jpg",
	"src/g.jpg",
	"src/h.jpg",
	"src/aa.jpg",
	"src/bb.jpg",
	"src/cc.jpg",
	"src/dd.jpg",
	"src/ee.jpg",
	"src/ff.jpg",
	"src/gg.jpg",
	"src/hh.jpg"
];
function ordenarArrayAlAzar() {
	imagenes.sort(function(a, b) {
		return 0.5 - Math.random();
	});
}
ordenarArrayAlAzar();
crearImagenTapada();

function crearImagenTapada() {
	$cuadro.forEach(function($cuadro, i) {
		imagen = document.createElement("img");
		imagen.className += "border";
		imagen.className += "rounded";
		imagen.className += "imagen"[i];
		imagen.src = imagenTapada;
		imagen.onclick = function() {
			debugger;
			if (imagen[i].src == "file:///D:/Github/MemoTest/src/imagenTapada.png") {
				imagen[i].src = imagenes[i];
				console.log("Entra");
			} else {
				console.log("No entra");
			}
		};
		$cuadro.appendChild(imagen);
	});
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
