$cuadro = document.querySelectorAll("#cuadro");

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

$cuadro.forEach(function($cuadro, i) {
	x = document.createElement("img");
	x.className += " img-fluid";
	x.src = imagenes[i];
	$cuadro.appendChild(x);
});
