window.onload = function()
{
  const usuario = document.querySelector('#usuario');
  const senha = document.querySelector('#senha');
  const btn = document.querySelector('#btn');
  let validacao = false;
  let users = [
    { "user" : "andre", "senha" : 123 },
    { "user" : "robertson", "senha" : "pear" },
    { "user" : "steven", "senha" : "rogers1917" },
  ]

  btn.addEventListener('click', function() {
    let usuarioInput = usuario.value;
    let senhaInput = senha.value;

    validacao = false
    for(let item of users){
      if(item["user"] == usuarioInput.trim() && item["senha"] == senhaInput.trim()){
        validacao = true
        window.location.href = './panel.html'
      }
      if(item["senha"] == senhaInput.trim() && item["user"] != usuarioInput.trim()){
        alert(`essa senha já está sendo usada pelo usuario ${item["user"]}`);
      }
    }
    if (validacao === false){
      alert("usuario nao encontrado")
    }
  })
}