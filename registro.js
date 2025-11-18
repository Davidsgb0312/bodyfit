function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (localStorage.getItem(email)) {
    alert("Este correo ya está registrado.");
    return;
  }

  const user = { name, email, password: pass };
  localStorage.setItem(email, JSON.stringify(user));

  alert("Registro exitoso. Ahora inicia sesión.");
  window.location.href = "login.html";
}
