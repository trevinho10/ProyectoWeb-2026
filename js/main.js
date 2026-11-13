const formulario = document.querySelector(".formularios");

if (formulario) {
    const nombre = document.getElementById("txtnombre");
    const email = document.getElementById("txtemail");
    const mensaje = document.getElementById("txtmensaje");

    const MAX_NOMBRE = 50;
    const MAX_MENSAJE = 100;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    nombre.maxLength = MAX_NOMBRE;
    mensaje.maxLength = MAX_MENSAJE;

    function validarNombre() {
        const valor = nombre.value.trim();
        if (valor === "") {
            nombre.setCustomValidity("El nombre es obligatorio.");
        } else if (valor.length > MAX_NOMBRE) {
            nombre.setCustomValidity(`El nombre no puede superar los ${MAX_NOMBRE} caracteres.`);
        } else {
            nombre.setCustomValidity("");
        }
    }

    function validarEmail() {
        const valor = email.value.trim();
        if (valor === "") {
            email.setCustomValidity("El correo es obligatorio.");
        } else if (!regexEmail.test(valor)) {
            email.setCustomValidity("Ingresa un correo electrónico válido (ej: nombre@correo.com).");
        } else {
            email.setCustomValidity("");
        }
    }

    function validarMensaje() {
        const valor = mensaje.value.trim();
        if (valor === "") {
            mensaje.setCustomValidity("El mensaje es obligatorio.");
        } else if (valor.length > MAX_MENSAJE) {
            mensaje.setCustomValidity(`El mensaje no puede superar los ${MAX_MENSAJE} caracteres.`);
        } else {
            mensaje.setCustomValidity("");
        }
    }
    nombre.addEventListener("input", validarNombre);
    email.addEventListener("input", validarEmail);
    mensaje.addEventListener("input", validarMensaje);
    validarNombre();
    validarEmail();
    validarMensaje();
    formulario.addEventListener("submit", function (e) {
        validarNombre();
        validarEmail();
        validarMensaje();

        if (!formulario.checkValidity()) {
            e.preventDefault();
            formulario.reportValidity(); // Muestra el primer error
            return;
        }

        e.preventDefault(); // Quita esta línea si luego conectas un backend
        alert("¡Mensaje enviado correctamente!");
        formulario.reset();
        validarNombre();
        validarEmail();
        validarMensaje();
    });
}