var botonEncriptar = document.querySelector(".btn-encriptador");
var botonDesencriptar = document.querySelector(".btn-desencriptador");
var Humano = document.querySelector(".contenedorhumano");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptador;
botonDesencriptar.onclick = desencriptador;

function encriptador() {
    ocultaradelante();
    var cajatexto = recuperartexto();
    resultado.textContent = encriptadortexto(cajatexto);
}

function desencriptador() {
    ocultaradelante();
    var cajatexto = recuperartexto();
    resultado.textContent = desencriptadortexto(cajatexto);
}

function recuperartexto() {
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

function ocultaradelante() {
    Humano.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptadortexto(mensaje) {
    var texto = mensaje;
    var textofinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textofinal = textofinal + "ai";
        } else if (texto[i] == "e") {
            textofinal = textofinal + "enter";
        } else if (texto[i] == "i") {
            textofinal = textofinal + "imes";
        } else if (texto[i] == "o") {
            textofinal = textofinal + "ober";
        } else if (texto[i] == "u") {
            textofinal = textofinal + "ufat";
        } else {
            textofinal = textofinal + texto[i];
        }
    }
    return textofinal;
}

function desencriptadortexto(mensaje) {
    var texto = mensaje;
    var textofinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textofinal = textofinal + "a";
            i = i + 1;
        } else if (texto[i] == "e") {
            textofinal = textofinal + "e";
            i = i + 4;
        } else if (texto[i] == "i") {
            textofinal = textofinal + "i";
            i = i + 3;
        } else if (texto[i] == "o") {
            textofinal = textofinal + "o";
            i = i + 3;
        } else if (texto[i] == "u") {
            textofinal = textofinal + "u";
            i = i + 3;
        } else {
            textofinal = textofinal + texto[i];
        }
    }
    return textofinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
});