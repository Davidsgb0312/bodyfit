function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem(email));

  if (!user || user.password !== pass) {
    alert("Credenciales no válidas");
    return;
  }

  localStorage.setItem("session", email);
  window.location.href = "dashboard.html";
}
