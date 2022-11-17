using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aula04.models
{
    public class Conta
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

        public void ExibirResumoConta()
        {
            Console.WriteLine($"Correntista: {Nome}");
            Console.WriteLine($"Numero: {Numero}");
            Console.WriteLine($"Agencia: {Agencia}");
            Console.WriteLine($"Saldo: {Saldo}\n");
        }

        public void ExibirSaldo()
        {
            Console.WriteLine($"Saldo: R${Saldo}");
        }
    }
}