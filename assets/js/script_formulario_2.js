window.addEventListener("DOMContentLoaded", function () {
    function FuncDatosUser() {
        const nombre =  document.getElementById("txtNombre").value;
        const apellido =  document.getElementById("txtApellido").value;
        const email =  document.getElementById("email").value;
        const pais =  document.getElementById("sltPais").value;
        const comentarios =  document.getElementById("txtareaComentarios").value;
        const genero =  document.querySelectorAll("input[genero]:checked")?.value;
        const condiciones =  document.getElementById("checkTerms").checked;

        //Validacion manual
        // Enviar a la BD
    }
});
