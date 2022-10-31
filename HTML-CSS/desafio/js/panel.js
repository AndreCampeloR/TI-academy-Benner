import { produtos } from './produtos.js';
import { clientes } from './clientes.js';

var menu = document.querySelectorAll(".menu");
var x = document.querySelectorAll(".btnFechar");
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
        
        var setaAnteriorCliente = document.querySelector('#setaAnteriorCliente');
        var setaProximoCliente = document.querySelector('#setaProximoCliente');
        var setaAnteriorProduto = document.querySelector('#setaAnteriorProduto');
        var setaProximoProduto = document.querySelector('#setaProximoProduto');
        var novoCliente = document.querySelector('#novoCliente');
        var salvarCliente = document.querySelector('#salvarCliente');
        var novoProduto = document.querySelector('#novoProduto');
        var salvarProduto = document.querySelector('#salvarProduto');
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
                    alert("limite do limite limitado")
                } })
                setaAnteriorCliente.addEventListener('click', function(){
                    if(valorCodigo > 0){
                        valorCodigo--
                        dadosCliente(valorCodigo);
                        
                                                } 
                else{
                    alert("limite do limite limitado")
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
                    alert("limite do limite limitado")
                } })
        setaAnteriorProduto.addEventListener('click', function(){
                    if(valorProduto > 0){
                        valorProduto--
                        dadosProduto(valorProduto);
                        
                    } 
                    else{
                    alert("limite do limite limitado")
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
            