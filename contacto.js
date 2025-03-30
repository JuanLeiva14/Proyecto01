
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let valid = true;
    const fields = [
        { id: 'nombre', errorId: 'nombreError' },
        { id: 'email', errorId: 'emailError' },
        { id: 'comentarios', errorId: 'comentariosError' }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorSpan = document.getElementById(field.errorId);
        
        if (!input.checkValidity()) {
            errorSpan.textContent = input.title; // Muestra el mensaje de error
            valid = false;
        } else {
            errorSpan.textContent = ''; // Limpia el mensaje de error
        }
    });

    // Si hay un error, prevenir el envío del formulario
    if (!valid) {
        event.preventDefault();
    }
});