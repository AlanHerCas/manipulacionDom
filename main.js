// Obtener elementos

const entradaNombre = document.getElementById("entradaNombre");
const entradaCorreo = document.getElementById("entradaCorreo");
const entradaEdad = document.getElementById("entradaEdad");

const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");

const alertNombre = document.getElementById("alertNombre");
const emailAlert = document.getElementById("emailAlert");
const ageAlert = document.getElementById("ageAlert");

const aviso = document.getElementById("aviso");


// Expresiones regulares

const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;

const emailRegex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;



submitBtn.addEventListener("click", (event) => {

    event.preventDefault();

    let isValid = true;


    if (!nameRegex.test(entradaNombre.value.trim())) {
        alertNombre.style.display = "block";
        isValid = false;
    } else {
        alertNombre.style.display = "none";
    }

    if (!emailRegex.test(entradaCorreo.value.trim())) {
        emailAlert.style.display = "block";
        isValid = false;
    } else {
        emailAlert.style.display = "none";
    }

    if (
        entradaEdad.value === "" ||
        isNaN(entradaEdad.value) ||
        Number(entradaEdad.value) <= 0
    ) {
        ageAlert.style.display = "block";
        isValid = false;
    } else {
        ageAlert.style.display = "none";
    }

    if (isValid) {
        aviso.innerText =
            `Bienvenido ${entradaNombre.value}, los datos son válidos.`;
    } else {
        aviso.innerText = "";
    }

});


clearBtn.addEventListener("click", (event) => {

    event.preventDefault();

    // Limpiar inputs

    entradaNombre.value = "";
    entradaCorreo.value = "";
    entradaEdad.value = "";

    // Ocultar alertas

    alertNombre.style.display = "none";
    emailAlert.style.display = "none";
    ageAlert.style.display = "none";

    // Limpiar mensaje

    aviso.innerText = "";

});