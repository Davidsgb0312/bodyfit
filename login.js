document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('signinForm');
    const signInMessage = document.getElementById('signinMessage');

    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signinEmail').value;
        const password = document.getElementById('signinPassword').value;

        if (email && password) {
            signInMessage.textContent = 'Iniciando sesión...';
            signInMessage.style.color = 'blue';

            setTimeout(() => {
                
                if (email === 'test@example.com' && password === 'password123') {
                    signInMessage.textContent = '¡Inicio de sesión exitoso! Redirigiendo...';
                    signInMessage.style.color = 'green';
                  
                    window.location.href = 'dashboard.html'; 
                } else {
                    signInMessage.textContent = 'Correo o contraseña incorrectos.';
                    signInMessage.style.color = 'red';
                }
            }, 1500); 
        } else {
            signInMessage.textContent = 'Por favor, rellena todos los campos.';
            signInMessage.style.color = 'red';
        }
    });
});