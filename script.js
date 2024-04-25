const form = document.querySelector('.formcontato__form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    const formData = new FormData(this); // Obtiene los datos del formulario

    const url = 'https://docs.google.com/forms/d/1YPvx8fZB5RTIy12BYs-wDgHFkJS33xMfE3HYFOU9fPc/prefill';

    fetch(url, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            alert('¡Mensaje enviado con éxito!');
            // Aquí puedes redirigir al usuario a una página de agradecimiento u otra página
        } else {
            alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.');
    });
});