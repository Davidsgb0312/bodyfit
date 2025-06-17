document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutButton');

    logoutButton.addEventListener('click', () => {
      
        alert('Cerrando sesión...');
        window.location.href = 'login.html';
    });

});