import { produtos } from './produtos.js';
import { clientes } from './clientes.js';

var menu = document.querySelectorAll(".menu");
var cadastroClientes = document.querySelector('#TelaCliente');
var cadastroProdutos = document.querySelector('#TelaProdutos');
var cadastroPedidos = document.querySelector('#TelaPedidos');
var form = document.forms
for(let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', function(){
        if(menu[i] == clienteMenu){
            cadastroProdutos.classList.add('desative');
            cadastroPedidos.classList.add('desative');
            cadastroClientes.classList.remove('desative');
            dadosCliente(0);
        } 
        if(menu[i] == produtoMenu){
            cadastroClientes.classList.add('desative');
            cadastroPedidos.classList.add('desative');
            cadastroProdutos.classList.remove('desative');
            dadosProduto(0);
        } 
        if(menu[i] == pedidosMenu){
            cadastroClientes.classList.add('desative');
            cadastroProdutos.classList.add('desative');
            cadastroPedidos.classList.remove('desative');
            
        } 
    })
};

     var fechar = document.querySelectorAll(".btnFechar");
       for(let elemento of fechar){
        elemento.addEventListener('click', function(){
            cadastroClientes.classList.add('desative');
            cadastroProdutos.classList.add('desative');
            cadastroPedidos.classList.add('desative');
        })
       }

        var setaAnteriorCliente = document.querySelector('#setaAnteriorCliente');
        var setaProximoCliente = document.querySelector('#setaProximoCliente');
        var setaAnteriorProduto = document.querySelector('#setaAnteriorProduto');
        var setaProximoProduto = document.querySelector('#setaProximoProduto');
        var novoCliente = document.querySelector('#novoCliente');
        var salvarCliente = document.querySelector('#salvarCliente');
        var novoProduto = document.querySelector('#novoProduto');
        var salvarProduto = document.querySelector('#salvarProduto');
        var clientePedidos = document.querySelector('#clientePedidos');

        var valorCodigo 
        var valorProduto     
        function dadosCliente(codigo){
            form[0][1].value = clientes[codigo]["codCliente"];
            form[0][2].value = clientes[codigo]["nomeCliente"];
            form[0][3].value = clientes[codigo]["dataCadCli"];
            valorCodigo = codigo 
        }
        setaProximoCliente.addEventListener('click', function(){
            if(valorCodigo < clientes.length -1){
                valorCodigo++
                    dadosCliente(valorCodigo);
                    
                } 
                else{
                    alert("Fim do Registro de Clientes")
                } })
                setaAnteriorCliente.addEventListener('click', function(){
                    if(valorCodigo > 0){
                        valorCodigo--
                        dadosCliente(valorCodigo);
                        
                    } 
                    else{
                        alert("Fim do Registro de Clientes")
                    }
        })
        function dadosProduto(codigo){
            form[1][1].value = produtos[codigo]["codProduto"];
            form[1][2].value = produtos[codigo]["descProduto"];
            form[1][3].value = produtos[codigo]["precoProduto"];
            form[1][4].value = produtos[codigo]["qtdEstoqueProd"]; 
            valorProduto = codigo
        } 
        setaProximoProduto.addEventListener('click', function(){
            if(valorProduto < produtos.length -1){
                valorProduto++
                dadosProduto(valorProduto);
                
            } 
            else{
                alert("Fim do Registro de Clientes")
            } })
            setaAnteriorProduto.addEventListener('click', function(){
                if(valorProduto > 0){
                    valorProduto--
                        dadosProduto(valorProduto);
                        
                    } 
                    else{
                        alert("Fim do Registro de Clientes")
                    }
                }); 
                var data = new Date();
                var dia = data.getUTCDate();
        var mes = data.getUTCMonth() +1;
        var ano = data.getUTCFullYear();
        novoCliente.addEventListener('click', function(){
            form[0][1].value = clientes.length +1
            form[0][2].value = inputNomeCliente.classList.remove('desativeCursor')
            document.getElementById('inputNomeCliente').value = '' 
            form[0][3].value = `${dia}/${mes}/${ano}`
            
        });
        salvarCliente.addEventListener('click', function(){
           let arrayClientes = {}
           arrayClientes.codCliente = form[0][1].value
           arrayClientes.nomeCliente = form[0][2].value
           arrayClientes.dataCadCli = form[0][3].value
           
           if(arrayClientes.codCliente <= clientes.length)
           {
               alert("crie um novo cliente para poder salvar")
               return;
            }
            clientes.push(arrayClientes)
           dadosCliente(0)
        })
        novoProduto.addEventListener('click', function(){
            form[1][1].value = produtos.length +1
            form[1][2].value = descricaoProdutos.classList.remove('desativeCursor')
            document.getElementById('descricaoProdutos').value = ''
            form[1][3].value = precoProdutos.classList.remove('desativeCursor')
            document.getElementById('precoProdutos').value = '' 
            form[1][4].value = quantidadeProdutos.classList.remove('desativeCursor')
            document.getElementById('quantidadeProdutos').value = '' 
        });
        salvarProduto.addEventListener('click', function(){
            let arrayProdutos = {}
            arrayProdutos.codProduto = form[1][1].value
            arrayProdutos.descProduto = form[1][2].value
            arrayProdutos.precoProduto = form[1][3].value
            arrayProdutos.qtdEstoqueProd = form[1][4].value
            
            if(arrayProdutos.codProduto <= produtos.length)
            {
                alert("crie um novo produto para poder salvar")
                return;
            }
 
            produtos.push(arrayProdutos)
            dadosProduto(0)
        });
        
        var codigoClientePedido = document.querySelector('#codigoClientePedido');
        var lancarPedido = document.querySelector('#lancarPedido');
        var inputCodigoProdutos = document.querySelector('#inputCodigoProdutos');
        var inputProdutos = document.querySelector('#inputProdutos');
        var inputPrecoProdutos = document.querySelector('#inputPrecoProdutos');
        var inputQuantidadeProdutos = document.querySelector('#inputQuantidadeProdutos');
        codigoClientePedido.addEventListener('blur', function(){
            for(let indicePedido of clientes){ 
                if(codigoClientePedido.value == indicePedido["codCliente"]){
                    clientePedidos.value = clientes[indicePedido["codCliente"] -1]["nomeCliente"];
                    break
                } else{
                    clientePedidos.value = "usuario não encontrado"
                }
            } 
        });
        inputCodigoProdutos.addEventListener('blur', function(){
            for(let indicePedido of produtos){ 
                if(inputCodigoProdutos.value == indicePedido["codProduto"]){
                    inputProdutos.value = produtos[indicePedido["codProduto"] -1]["descProduto"];
                    inputPrecoProdutos.value = produtos[indicePedido["codProduto"] -1]["precoProduto"];
                    break
                } else{
                    inputProdutos.value = "produto não encontrado"
                    inputPrecoProdutos.value = " "
                }
            } 
        });
        lancarPedido.addEventListener('click', ()=>{
            for(let indiceQuantidade of produtos){
            if(inputCodigoProdutos.value == indiceQuantidade["codProduto"]){
                if(inputQuantidadeProdutos.value <= produtos[indiceQuantidade["codProduto"] -1]["qtdEstoqueProd"]){
                    
                    listaProdutos()
                  
                } else {
                   alert("quantidade indisponivel")
                }
           } 
           
        }})
        function listaProdutos()
        { 
                let tbody = document.getElementById('tbody');
                for(let i of tbody.rows){
                    if(inputCodigoProdutos.value == i.cells[0].textContent){
                          alert("esse produto já está na lista");
                          return;
                    } 
                }
                let tr = tbody.insertRow();
                tr.classList.add('linhaTabela')
                
                let td_codProduto = tr.insertCell();
                let td_descProduto = tr.insertCell();
                let td_precoProduto = tr.insertCell();
                let td_qtdEstoqueProd = tr.insertCell();
                let td_subTotal = tr.insertCell();
                let Total = document.getElementById('Total');
                
                    td_codProduto.innerText = inputCodigoProdutos.value
                    td_descProduto.innerText = inputProdutos.value
                    td_precoProduto.innerText = inputPrecoProdutos.value
                    td_qtdEstoqueProd.innerText = inputQuantidadeProdutos.value;
                    td_subTotal.innerText = (Number(inputQuantidadeProdutos.value)*Number(inputPrecoProdutos.value)).toFixed(2);
                    
                    ZeraInput();
                    
                    Total.innerHTML = (Number(Total.innerHTML)+Number(td_subTotal.innerText)).toFixed(2);
                    
                }
                
            
 function ZeraInput(){
    inputCodigoProdutos.value = '';
    inputPrecoProdutos.value = '';
    inputProdutos.value = '';
    inputQuantidadeProdutos.value = '';
                     }
            
            
            