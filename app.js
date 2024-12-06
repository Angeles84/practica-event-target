
var traeBotones = document.getElementById('traeBotones');
var divBotones = document.getElementById('divBotones');
var fondo = document.getElementById('fondo');


function agregarBotones(e){
  e.preventDefault()
  divBotones.innerHTML = `
    <p>click en los botones para cambiar el color de fondo</p>
    <button class="btn btn-primary mb-2">Primary</button>
    <button class="btn btn-info mb-2">Info</button>
    <button class="btn btn-success mb-2">Success</button>
    <button class="btn btn-warning mb-2">Warning</button>
    <button class="btn btn-danger mb-2">Danger</button>
    <button class="btn btn-white border border-dark mb-2">White</button>
  `
}

function delegacion(evento){
  evento.preventDefault()
  console.log(evento.target)
  console.log(evento.target.classList)
  console.log(evento.target.classList[1])
  
  const colorBtn = evento.target.classList[1];
  
  if (colorBtn == 'btn-primary'){
    fondo.className = 'bg-primary';
    localStorage.setItem('colorFondo', 'bg-primary');
  } else if (colorBtn == 'btn-info'){
    fondo.className = 'bg-info';
    localStorage.setItem('colorFondo', 'bg-info');
  } else if (colorBtn == 'btn-success'){
    fondo.className = 'bg-success';
    localStorage.setItem('colorFondo', 'bg-success');
  } else if (colorBtn == 'btn-warning'){
    fondo.className = 'bg-warning';
    localStorage.setItem('colorFondo', 'bg-warning');
  } else if (colorBtn == 'btn-danger'){
    fondo.className = 'bg-danger';
    localStorage.setItem('colorFondo', 'bg-danger');
  } else if (colorBtn == 'btn-white'){
    fondo.className = 'bg-white';
    localStorage.setItem('colorFondo', 'bg-white');
  }
}

(()=> {
  traeBotones.addEventListener('click', agregarBotones );
  divBotones.addEventListener('click', delegacion )
})();

(()=> {
  const color = localStorage.getItem('colorFondo')
  console.log(color)
  if (color === null){
    fondo.className = 'bg-light'
  } else {
    fondo.className = color;
  }
})();

var caja = document.getElementById("caja");
var cuadritos = document.querySelectorAll(".cruadroBtn")

cuadritos.forEach(function (cuadrito) {
    cuadrito.addEventListener("click", function (evento) {
        let cuadritoTarget = evento.target;
        let colorCuadrito = cuadritoTarget.style.backgroundColor;
        console.log(cuadritoTarget);
        caja.style.backgroundColor = colorCuadrito;
    });
});