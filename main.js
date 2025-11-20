// Ejercicio 1
const cambiar = document.querySelector("#cambiar");

if (cambiar) {
    cambiar.addEventListener("click", () => {
        document.getElementById("titulo");
        const titulo = document.querySelector("#titulo");
        titulo.innerHTML = "DOM modificado"
    });
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

// Ejercicio 6
const botonActivar = document.getElementById("activar");

if (botonActivar) {
    botonActivar.addEventListener("click", () => {
        const estado = document.getElementById("estado");
        estado.innerHTML = "Estado: ¡ACTIVO!"
        estado.style.color = "GREEN"
    });
}

// Ejercicio 7
const botonAlternar = document.getElementById("alternar");

if (botonAlternar) {
    botonAlternar.addEventListener("click", () => {
        const cajaApagada = document.querySelector(".caja-apagada");
        cajaApagada.style.background = "YELLOW";
        cajaApagada.classList.toggle("caja-encendida");
        if (cajaApagada.classList.contains("caja-encendida")) {
            cajaApagada.style.background = "GREY";
        }
    });
}

// Ejercicio 8
const areaTexto = document.getElementById("areaTexto");

if (areaTexto) {
    areaTexto.addEventListener("keyup", () => {
        const conteo = document.getElementById("conteo");
        conteo.textContent = areaTexto.value.length;
    });
}

// Ejercicio 9
const enlace = document.getElementById("enlace");

if (enlace) {
    enlace.addEventListener("click", (event) => {
        event.preventDefault();
        alert("¡Navegación bloqueada por Javascript!");
    });
}

// Ejercicio 10
const cajaPuntero = document.getElementById("cajaPuntero");
let fondoPorDefecto = cajaPuntero.style.backgroundColor;

if (cajaPuntero) {
    cajaPuntero.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "red";
    });
    cajaPuntero.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = fondoPorDefecto;
    });
}

// Ejercicio 11
const abuelo = document.getElementById("abuelo");
const padre = document.getElementById("padre");
const hijo = document.getElementById("hijo");

abuelo.addEventListener("click", (event) => {
    console.log("Clic en el abuelo");
});

padre.addEventListener("click", (event) => {
    console.log("Clic en el padre");
    event.stopPropagation();
});

hijo.addEventListener("click", (event) => {
    console.log("Clic en el hijo");
});