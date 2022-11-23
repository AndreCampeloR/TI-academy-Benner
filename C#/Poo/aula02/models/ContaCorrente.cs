using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aula02.models
{
    public class ContaCorrente
    {
         public int Numero { get; set; } 

       private decimal Saldo { get; set; }

       public ContaCorrente (decimal saldoInicial)
       {
        Saldo = saldoInicial;
       }

       public void Sacar (decimal valor)
       {
        if (valor <= Saldo)
        {
        Saldo = Saldo - valor;
        Console.WriteLine("saque de " + valor + " efetuado com sucesso");
        } else
        {
            Console.WriteLine("Saldo insuficiente");
        }
       }

       public void ExibirSaldo ()
       {
        Console.WriteLine("seu saldo é : R$ " + Saldo);
       }
    }
}