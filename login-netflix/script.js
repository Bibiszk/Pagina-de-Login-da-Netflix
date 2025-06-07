document.querySelector("form").addEventListener("submit", function (e) {
  const email = document.querySelector("input[type='email']").value.trim();
  const senha = document.querySelector("input[type='password']").value.trim();

  if (!email || !senha) {
    alert("Por favor, preencha todos os campos.");
    e.preventDefault();
  } else {
    alert("Login enviado com sucesso!");
  }
});
