const usuario = document.querySelector('#usuario');
const senha = document.querySelector('#senha');
const btn = document.querySelector('#btn');
let validacao = false;
const dadosUser = async function(){
  var dadosFetch = await fetch(`./usuario.json`);
    var dadosJson = await dadosFetch.json();
    
    btn.addEventListener('click', function() {
      let usuarioInput = usuario.value;
      let senhaInput = senha.value;
      
      validacao = false
      for(let item of dadosJson.users){
        if(item["user"] == usuarioInput.trim() && item["senha"] == senhaInput.trim()){
              validacao = true
              window.location.href = './panel.html'}
        if(item["senha"] == senhaInput.trim() && item["user"] != usuarioInput.trim()){
                alert(`essa senha já está sendo usada pelo usuario ${item["user"]}`);}
}
        if(validacao === false){
                alert(`usuario ou senha incorretos`);
}
        })
      }
dadosUser();