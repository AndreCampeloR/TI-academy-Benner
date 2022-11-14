using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aula03.models
{
    public class ContaCorrente
    {
        public string? name {get; set;}
        public int numero {get; set;}
        public int agencia {get; set;}
        public double saldo {get; set;}
        public double tarifa {get; set;}

        public void Depositar (double valor){
            saldo = saldo + valor; 
        }

        public void ExibirResumoConta(){
            Console.WriteLine($"Corretista: {name}");
            Console.WriteLine($"Numero: {numero}");
            Console.WriteLine($"Agencia: {agencia}");
            Console.WriteLine($"Saldo: {saldo}");

        }

    }
}