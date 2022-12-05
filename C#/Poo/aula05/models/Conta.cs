using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aula05.models
{
     public abstract class Conta
    {
        public string? Nome { get; set; }
        public int Numero { get; set; }
        public int Agencia { get; set; }
        private double Saldo { get; set; }
        public string? Senha { get; set; }

        public void Depositar(double valor)
        {
            Saldo = Saldo + valor;
        }

        public void Sacar(double valor)
        {
            if (valor <= Saldo)
            {
                Saldo = Saldo - valor;
            }
            else
            {
                Console.WriteLine("Saldo insuficiente");
            }
        }

        public virtual void ExibirResumoConta()
        {
            Console.WriteLine($"Correntista: {Nome}");
            Console.WriteLine($"Numero: {Numero}");
            Console.WriteLine($"Agencia: {Agencia}");
            Console.WriteLine($"Saldo: {Saldo}");
        }

        public void ExibirSaldo()
        {
            Console.WriteLine($"Saldo: R${Saldo}");
        }

        public virtual void ExibirTipoDeConta()
        {
            Console.WriteLine("Tipo de conta");
        }
    }
}