using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aula03.models
{
    public class ContaPoupanca
    {
        public string? Nome { get; set; }
        public int Numero { get; set; }
        public int Agencia { get; set; }
        public double Saldo { get; set; }
        public double Juros { get; set; }

        public void Depositar(double valor)
        {
            Saldo = Saldo + valor;
        }

        public void ExibirResumoConta()
        {
            Console.WriteLine($"Correntista: {Nome}");
            Console.WriteLine($"Numero: {Numero}");
            Console.WriteLine($"Agencia: {Agencia}");
            Console.WriteLine($"Saldo: {Saldo}");
        }
    }
}