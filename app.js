const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const campo = document.getElementById("amigo");

let amigos = [];

function agregarAmigo() {
    const nombre = campo.value.trim();

    if (!nombre) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    campo.value = "";
}

function actualizarLista() {
    listaAmigos.innerHTML = "";
    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
