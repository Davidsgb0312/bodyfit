function resetPass() {
  const email = document.getElementById("email").value;
  const newpass = document.getElementById("newpass").value;

  const user = JSON.parse(localStorage.getItem(email));

  if (!user) {
    alert("Usuario no encontrado.");
    return;
  }

  user.password = newpass;
  localStorage.setItem(email, JSON.stringify(user));

  alert("Contraseña actualizada.");
  window.location.href = "login.html";
}
