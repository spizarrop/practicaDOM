// Ejercicio 1
const cambiar = document.querySelector("#cambiar");

if(cambiar)
{
    cambiar.addEventListener("click", cambiarTexto);
}

function cambiarTexto(){
    document.getElementById("titulo");
    const titulo = document.querySelector("#titulo");
    titulo.innerHTML = "DOM modificado"
}

// Ejercicio 2
const texto = document.getElementById("texto");
const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    if (texto.style.display === "none") {
        texto.style.display = "block";
        boton.textContent = "Ocultar";
    } else {
        texto.style.display = "none";
        boton.textContent = "Mostrar";
    }
});

// Ejercicio 3
const entrada = document.getElementById("entrada");
const agregar = document.getElementById("agregar");
const lista = document.getElementById("lista");

agregar.addEventListener("click", () => {
    const texto = entrada.value.trim();

    if (texto === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = texto;

    lista.appendChild(li);
    entrada.value = "";
});

// Ejercicio 4
let valor = 0;
const contador = document.getElementById("contador");

document.getElementById("sumar").addEventListener("click", () => {
    valor++;
    contador.textContent = valor;
});

document.getElementById("restar").addEventListener("click", () => {
    valor--;
    contador.textContent = valor;
});

document.getElementById("reset").addEventListener("click", () => {
    valor = 0;
    contador.textContent = valor;
});

// Ejercicio 5
const crear = document.getElementById("crear");
const contenedor = document.getElementById("contenedor");

crear.addEventListener("click", () => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const texto = document.createElement("p");
    texto.textContent = "Soy una tarjeta";

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", () => {
        tarjeta.remove();
    });

    tarjeta.appendChild(texto);
    tarjeta.appendChild(btnEliminar);
    contenedor.appendChild(tarjeta);
});