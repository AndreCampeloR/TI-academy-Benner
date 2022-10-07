var nome = prompt("Digite seu nome");
var altura = prompt("Digite sua altura");
var peso = prompt("Digite seu peso");
var imc =  peso / (altura*altura);
function resultado(){

      document.write("Nome: "+ nome + "<br>");
      document.write("Altura:  "+ altura + "<br>");
      document.write("Peso: "+ peso + "<br>" );
      document.write("Imc: "+  imc);
}

resultado();