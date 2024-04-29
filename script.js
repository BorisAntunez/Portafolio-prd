document.addEventListener("DOMContentLoaded", function() {
    var form = document.forms["form"];
    
    form.addEventListener("submit", function(event) {
      var nombreInput = form.elements["nombre"];
      var nombre = nombreInput.value.trim();
  
      
      if (nombre === "") {
        alert("El campo Nombre no debe estar vacío.");
        nombreInput.focus();
        event.preventDefault(); // Evita que se envíe el formulario
        return;
      }
  
      // Validar la longitud del campo nombre
      if (nombre.length > 50) {
        alert("El campo \"Nombre\" debe contener máximo 50 caracteres.");
        nombreInput.focus();
        event.preventDefault(); // Evita que se envíe el formulario
        return;
      }

      //Aqui parte validacion del campo email

      var emailInput = form.elements["email"];
      var email = emailInput.value.trim();

      
      if (email === "") {
        alert("El campo \"E-mail\" no debe estar vacío.");
        emailInput.focus();
        event.preventDefault(); // Evita que se envíe el formulario
        return;
      }

      // Validar formato de email usando una expresión regular
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("El formato del correo electrónico no es válido.");
        emailInput.focus();
        event.preventDefault(); // Evita que se envíe el formulario
        return;
      }

      var asuntoInput = form.elements["asunto"]
      var asunto = asuntoInput.value.trim();

      if (asunto === "") {
        alert("El campo \"Asunto\" no debe estar vacío.");
        asuntoInput.focus();
        event.preventDefault();
        return;

      }
      else if (asunto.length > 50) {
        alert("El campo \"Asunto\" no debe tener más de 50 caracteres.")
        asuntoInput.focus();
        event.preventDefault();
        return;
      }

      var mensajeTextarea = form.elements["mensaje"]
      var mensaje = mensajeTextarea.value.trim();

      if (mensaje === "") {
        alert ("El campo \"Mensaje\" no debe estar vacío.");
        mensajeTextarea.focus();
        event.preventDefault();
        return;
        }
        else if (mensaje.length >300) {
          alert("El campo \"Mensaje\" no debe tener más de 300 caracteres.")
          mensajeTextarea.focus();
          event.addEventListener();
          return;

        }


  
      
    });
  });
  