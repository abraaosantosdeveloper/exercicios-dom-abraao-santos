const botao = document.getElementById("cadastrar");

botao.addEventListener("click", function cadastrarUsuario(e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let nascimento = document.getElementById("dataNasc").value;
  let rua = document.getElementById("rua").value;
  let numero = document.getElementById("numero").value;
  let cidade = document.getElementById("cidade").value;
  let estado = document.getElementById("uf").value;
  let resultado = document.getElementById("resultado");
  
  resultado.style.fontSize = "24px";

  if (!nome || !nascimento || !rua || !numero || !cidade || !estado) {
    resultado.innerText = `Todos os campos são obrigatórios.`;
    resultado.style.color = "red";
  } else {
    resultado.innerText = `${nome} nasceu no dia ${nascimento} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${estado}.`;
    resultado.style.color = "green";
  }
});
