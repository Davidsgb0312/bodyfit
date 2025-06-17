document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.getElementById('signupForm');
    const signUpMessage = document.getElementById('signUpMessage');

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        if (name && email && password) {
            signUpMessage.textContent = 'Registrando cuenta...';
            signUpMessage.style.color = 'blue';

            setTimeout(() => {
                
                if (email.includes('@') && password.length >= 6) { 
                    signUpMessage.textContent = '¡Registro exitoso! Redirigiendo a inicio de sesión...';
                    signUpMessage.style.color = 'green';
                    window.location.href = 'login.html';
                } else {
                    signUpMessage.textContent = 'Error en el registro. Verifica tus datos.';
                    signUpMessage.style.color = 'red';
                }
            }, 1500); 
        } else {
            signUpMessage.textContent = 'Por favor, rellena todos los campos.';
            signUpMessage.style.color = 'red';
        }
    });
});